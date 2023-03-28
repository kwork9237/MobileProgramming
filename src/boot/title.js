import { boot } from 'quasar/wrappers'
import titleMixin from 'src/mixins/title-mixin'

export default boot(({ app }) => {
    app.mixin(titleMixin);
})