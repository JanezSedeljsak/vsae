import json

class ServerMethods:
    @staticmethod
    def dispatchJSON(obj):
        return json.dumps(obj, separators=(',', ':'))

