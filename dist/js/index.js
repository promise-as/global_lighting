"use strict";

$(function () {
  /* 环球网校 会员专属 */
  // 左侧的高度根据右侧的高度取值
  $(".item-detail .detail-row").each(function (index, ele) {
    $(ele).children(".detail-key").outerHeight($(ele).children(".detail-val").outerHeight(true));
  });

  /* 重置select */
  // currentOption: 当前选项, showOptions: 模拟的options
  // originalSelect: 原本的select
  function optimizeSelect(currentOption, showOptions, originalSelect) {
    // 默认显示的option标签
    currentOption.click(function () {
      showOptions.css("display", "block");

      // 点击默认显示的option标签，就显示模拟的options
      showOptions.children("li").each(function () {
        $(this).click(function () {
          // 取模拟的select的li的rel的值赋值给option标签的value
          originalSelect.val($(this).attr("rel"));
          // 隐藏模拟的select
          showOptions.css("display", "none");
          // 把从option标签的html值赋值给默认显示的option
          // currentOption.html($(this).html()); // div
          currentOption.val($(this).html()); // input
        });
      });
    });
  }
  // 类别
  optimizeSelect($(".current-type"), $(".types-options"), $(".types-select"));

  /* mouseEntered */
  function mouseEntered(tabHead, tabBody) {
    tabHead.each(function (index) {
      var that = $(this);
      that.mouseover(function () {
        that.addClass("active").siblings().removeClass("active");
        $(tabBody[index]).addClass("active").siblings().removeClass("active");
      });
    });
  }

  mouseEntered($(".membership .head-item"), $(".membership .tab-cont"));
  mouseEntered($(".koolearn-membership .head-item"), $(".koolearn-membership .tab-cont"));
  mouseEntered($("#good1 .head-item"), $("#good1 .tab-cont"));
  mouseEntered($("#good2 .head-item"), $("#good2 .tab-cont"));
});