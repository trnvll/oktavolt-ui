from langchain.llms import OpenAI
from langchain.agents import AgentExecutor, create_openai_tools_agent
from langchain import hub
import os
import json


class OpenAIService:
    def __init__(self, openai_api_key: str, func_calling_defs_json_folder: str):
        self.llm = OpenAI(openai_api_key, model="gpt-4-turbo-preview", temperature=0)
        self.comp_tools = self.load_comp_tools(func_calling_defs_json_folder)
        self.agent_exec = self.init_agent_exec()

    def load_comp_tools(self, folder_path: str):
        comp_tools = []
        for filename in os.listdir(folder_path):
            with open(os.path.join(folder_path, filename), 'r') as f:
                definition = json.load(f)
                comp_tools.append(definition)

        return comp_tools

    def init_agent_exec(self):
        prompt = hub.pull("hwchase17/openai-tools-agent")
        agent = create_openai_tools_agent(self.llm, self.comp_tools, prompt)
        return AgentExecutor(agent=agent, tools=self.comp_tools, verbose=True)

    def process_comp_request(self, prompt: str):
        return self.agent_exec({"input": prompt})
