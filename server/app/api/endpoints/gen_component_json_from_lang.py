import json

from fastapi import APIRouter

router = APIRouter()


@router.post("/")
async def gen_comp_json_from_lang():
    return json.dumps([
        {
            "id": "footer",
            "properties": {
                "children": "This is an example of a footer",
                "className": "my-6"
            }
        }
    ])
