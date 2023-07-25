import AppLayout from '@/components/common/AppLayout.vue'
const Components = {
  AppLayout
}

export default function registered(app) {
  const compName = Object.keys(Components)
  compName.reduce((previousName, currentName) => {
    return app.component(currentName, Components[currentName])
  }, app)
  return app
}
