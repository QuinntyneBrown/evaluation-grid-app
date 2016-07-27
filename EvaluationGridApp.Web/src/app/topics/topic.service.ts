import { BaseService, Injectable, Service } from "../core";

@Injectable()
@Service({
	serviceName: "topicService",
	viewProviders: ["$q","apiEndpoint","fetch"]
})
export class TopicService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/v1/topic"; }

}
