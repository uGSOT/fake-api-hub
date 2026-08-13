from typing import Any, List, Optional, Tuple, Type, TypeVar

from fastapi import HTTPException, status
from pydantic import BaseModel
from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.schemas.common import PaginatedResponse, PaginationMeta, SingleResponse
from app.utils.pagination import get_pagination_params

ModelType = TypeVar("ModelType")
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)
ResponseSchemaType = TypeVar("ResponseSchemaType", bound=BaseModel)


class NotFoundError(HTTPException):
    def __init__(self, resource: str, item_id: int) -> None:
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"{resource} with id {item_id} not found",
        )


def paginate_query(
    query,
    *,
    page: int,
    limit: int,
) -> Tuple[List[Any], int]:
    total = query.count()
    items = query.offset((page - 1) * limit).limit(limit).all()
    return items, total


def build_paginated_response(
    items: List[Any],
    *,
    total: int,
    page: int,
    limit: int,
    response_schema: Type[ResponseSchemaType],
) -> PaginatedResponse:
    return PaginatedResponse(
        status=200,
        data=[response_schema.model_validate(item) for item in items],
        meta=PaginationMeta(
            total=total,
            page=page,
            limit=limit,
            totalPages=max(1, (total + limit - 1) // limit) if total else 0,
        ),
    )


def build_single_response(
    item: Any,
    *,
    response_schema: Type[ResponseSchemaType],
) -> SingleResponse:
    return SingleResponse(status=200, data=response_schema.model_validate(item))


def apply_search_filter(query, model, search: Optional[str], search_columns: List[Any]):
    if not search:
        return query
    pattern = f"%{search.lower()}%"
    conditions = [column.ilike(pattern) for column in search_columns]
    return query.filter(or_(*conditions))


def get_list_params(
    search: Optional[str] = None,
    page: Optional[int] = None,
    limit: Optional[int] = None,
):
    return search, *get_pagination_params(page, limit)
