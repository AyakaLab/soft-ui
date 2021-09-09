import NProgress from 'nprogress'
import { UserModule } from 'website/src/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => { NProgress.start() })
    router.afterEach(() => { NProgress.done() })
  }
}
