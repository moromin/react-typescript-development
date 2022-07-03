import times, {plus} from './modules/math.js';
import _ from 'lodash';

console.log(plus(5));
console.log(times(5));

const arr = [1, 2, 3, 4, 5];
console.log(_.min(arr), _.max(arr));
