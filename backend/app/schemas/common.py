from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class PaginationMeta(BaseModel):
    total: int
    page: int
    limit: int
    total_pages: int = Field(alias="totalPages")

    model_config = ConfigDict(populate_by_name=True)


class PaginatedResponse(BaseModel):
    status: int = 200
    data: list
    meta: PaginationMeta


class SingleResponse(BaseModel):
    status: int = 200
    data: object


class ErrorResponse(BaseModel):
    status: int
    error: str
    detail: Optional[str] = None
