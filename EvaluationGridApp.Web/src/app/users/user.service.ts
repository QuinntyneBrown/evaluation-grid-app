import { BaseService, Injectable, Service } from "../core";

@Injectable()
@Service({
	serviceName: "userService",
	viewProviders: ["$q","apiEndpoint","fetch"]
})
export class UserService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/v1/user"; }

}
