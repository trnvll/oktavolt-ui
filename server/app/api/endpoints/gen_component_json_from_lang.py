from fastapi import APIRouter

from config.settings import settings
from services.openai_service import OpenAIService

router = APIRouter()


@router.post("/")
async def gen_comp_json_from_lang():
    prompt = """
        Create a marketing page with different sections inspired by apple design for a startup in sweden that is aiming 
        to solve the problem with housing queues. They already have 50000 customers and 4.5 average review from 800 
        reviewers
    """
    agent = OpenAIService(settings, '../../../../json_components')
    return agent.process_comp_request(prompt)
