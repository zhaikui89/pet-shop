/**
 * Created by zhaikui on 2017/11/22.
 */
import Mock from 'mockjs'
import position from './position.json'
import surprise from './surprise.json'
import first from './first.json'
import brand from './brand.json'
import classify from './classify.json'
import classifyDetail from './classifydetail.json'
import singles from './SingleadItem.json'
Mock.mock('/city',{code:0,data:position.city})
Mock.mock('/city/classify',{code:0,data:position.city.cityclassify})
Mock.mock('/first/menus',{code:0,data:first.menus})
Mock.mock('/surprise/goods',{code:0,data:surprise.data["3"].goods})
Mock.mock('/column',{code:0,data:first.datas[3].menus})
Mock.mock('/comment',{code:0,data:first.datas})
Mock.mock('/brand',{code:0,data:brand.brand})
Mock.mock('/getClassify',{code:0,data:classify.categorys})
Mock.mock('/getClassifyDetail',{code:0,data:classifyDetail})
Mock.mock('/getBanners',{code:0,data:first.datas[0].value})
Mock.mock('/getSingles',{code:0,data:singles})
