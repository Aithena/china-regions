const china = []

$.getJSON('../2021/json/region.json', (res) =>  {
  const provide = JSON.parse(JSON.stringify(res))
  const provideList = []
  provide.map((item) => {
    const cityList = []
    if (item.child) {
      const city = item.child
      city.map((item2) => {
        const areaList = []
        if (item2.child) {
          const area = item2.child
          area.map((item3) => {
            areaList.push({
              label: item3.name,
              value: item3.name
            })
          })
        }
        cityList.push({
          label: item2.name,
          value: item2.name,
          children: areaList
        })
      })
    }
    provideList.push({
      label: item.name,
      value: item.name,
      children: cityList
    })
  })
  console.log(provideList)
  console.log(JSON.stringify(provideList))
})