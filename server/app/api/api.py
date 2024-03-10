from fastapi import APIRouter
from .endpoints import gen_component_json_from_lang

router = APIRouter()

router.include_router(gen_component_json_from_lang.router, prefix="/gen")