/**
 * Created by zhaikui on 2017/11/21.
 */
export default {
  GET_CITY (state, {city}) {
    state.city=city
    localStorage.setItem('city',JSON.stringify(city))
  },
  GET_FIRST_MENUS (state, {firstMenus}) {
    let names = firstMenus.map((item,index)=>{
      return {menu_name:item.menu_name}
    })
    state.firstMenus = names
  },
  GET_IMG (state, {firstImg}) {
    state.firstImg = firstImg
  },
  GET_COLUMN (state,{column}) {
    state.column = column
  },
  GET_COMMENT (state, {comment}) {
     let comments=comment.find((value,index,arr)=>{
      return value.index=== "464"
    })
    state.comments = comments.list
  },
  GET_BRAND (state,{brands}) {
    state.brands = brands
  },
  GET_CLASSIFY (state,{classify}) {
    state.classify = classify
  },
  GET_CLASSIFY_DETAIL (state, {classifyDetail}) {
    state.classifyDetail = classifyDetail.cate_list
  },
  GET_BANNERS (state, {banners}) {
    state.banners = banners
  },
  GET_SINGLES (state,{singles}) {
    state.singles=singles
  }
}

