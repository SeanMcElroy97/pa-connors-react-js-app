import _ from 'lodash'

export function sort(direction, column, array){
    // console.log(direction)
   return _.orderBy(array, [column], [direction])
}