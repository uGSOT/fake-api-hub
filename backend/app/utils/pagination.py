from typing import Optional, Tuple

DEFAULT_PAGE = 1
DEFAULT_LIMIT = 10
MAX_LIMIT = 100


def get_pagination_params(page: Optional[int] = None, limit: Optional[int] = None) -> Tuple[int, int]:
    safe_page = page if page and page > 0 else DEFAULT_PAGE
    safe_limit = limit if limit and 0 < limit <= MAX_LIMIT else DEFAULT_LIMIT
    return safe_page, safe_limit
