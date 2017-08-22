/**
 * Created by will on 17/8/22.
 */
import _ from 'lodash';
import '../css/index.css';
import  '../css/dedede.css';
function component () {
    var element = document.createElement('div');

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    var moment = require('moment');
    console.log(moment().format());
    return element;
}

document.body.appendChild(component());