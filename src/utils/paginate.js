import _, { size } from 'lodash'

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber-1)*pageSize;
    // console.log('start index' +startIndex)
   return  _(items).slice(startIndex).take(pageSize).value()
}