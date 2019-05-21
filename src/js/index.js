$(function () {
  /*会员专属*/
  // $(".tab-cont .detail-key")
  //   .outerHeight($(".tab-cont .detail-val").outerHeight(true));

  $(".item-detail .detail-row").each(function (index, ele) {
    $(ele).children(".detail-key")
      .outerHeight($(ele).children(".detail-val").outerHeight(true));
  });
});