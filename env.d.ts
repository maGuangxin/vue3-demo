import axios from 'axios'
declare module 'vue' {
    export interface ComponentCustomProperties {
        $http: typeof axios
        $translate: (key: string) => string
    }
    export interface App {}
}
declare module 'axios' {
    export interface ComponentCustomProperties {
        $http: typeof axios
        $translate: (key: string) => string
    }
}

