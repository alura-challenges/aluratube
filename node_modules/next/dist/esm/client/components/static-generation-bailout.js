import { DynamicServerError } from './hooks-server-context';
import { staticGenerationAsyncStorage } from './static-generation-async-storage';
export function staticGenerationBailout(reason) {
    const staticGenerationStore = staticGenerationAsyncStorage && 'getStore' in staticGenerationAsyncStorage ? staticGenerationAsyncStorage == null ? void 0 : staticGenerationAsyncStorage.getStore() : staticGenerationAsyncStorage;
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        // TODO: honor the dynamic: 'force-static'
        if (staticGenerationStore) {
            staticGenerationStore.fetchRevalidate = 0;
        }
        throw new DynamicServerError(reason);
    }
}

//# sourceMappingURL=static-generation-bailout.js.map