﻿$(function () {
        $.fn.popover.Constructor.Default.whiteList.table = [];
        $.fn.popover.Constructor.Default.whiteList.tr = [];
        $.fn.popover.Constructor.Default.whiteList.th = [];
        $.fn.popover.Constructor.Default.whiteList.td = [];
        $.fn.popover.Constructor.Default.whiteList.div = [];
        $.fn.popover.Constructor.Default.whiteList.tbody = [];
        $.fn.popover.Constructor.Default.whiteList.thead = [];
        $('#info').popover({
            content: $("#infotable").html(),
            html: true,
            container: 'body'
        });
    });