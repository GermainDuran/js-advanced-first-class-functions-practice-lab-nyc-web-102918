// Code your solution in this file!
function logDriverNames(drivers) {
  for (const driver of drivers){
    console.log(driver.name)
  }
}


function logDriversByHometown(drivers,location){
  for (const driver of drivers){
    if (driver.hometown === location){
      console.log(driver.name)
    }
  }
}

function driversByRevenue(drivers){
  const new_array = [...drivers] //primero hago una copia de mi array, quiero retornar uno nuevo
  const ordenado = new_array.sort(function (x, y) {
    return x.revenue - y.revenue
  })
  return ordenado

}

function driversByName(drivers){
  const new_array = [...drivers]
  const ordenado = new_array.sort(function(x,y) {
    return x.name.localeCompare(y.name)
  })
  return ordenado
}


function totalRevenue(drivers){
  let sum = 0
  for(const driver of drivers){
    sum=driver.revenue + sum

  }
  return sum
}

function averageRevenue(drivers){
  const total=totalRevenue(drivers)
  const promedio = total/drivers.length
  return promedio
}
