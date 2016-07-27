import { BaseService, Injectable, Service } from "../core";

@Injectable()
@Service({
	serviceName: "roleService",
	viewProviders: ["$q","apiEndpoint","fetch"]
})
export class RoleService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/v1/role"; }

}
