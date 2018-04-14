<?php
$z[0]=Array("global","",211,237);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","",281,332);
$z[1][4]=array();
$z[1][4]['name']="description";
$z[1][4]['function']="html2text(@me)";
$z[2]=Array("field","",371,393);
$z[2][4]=array();
$z[2][4]['name']="keywords";
$z[3]=Array("include","",1348,1383);
$z[3][4]=array();
$z[3][4]['filename']="head.htm";
$z[4]=Array("global","",1512,1567);
$z[4][4]=array();
$z[4][4]['name']="keyword";
$z[4][4]['function']="RemoveXSS(@me)";
$z[5]=Array("channel","\r\n			\r\n				<li><a href='[field:typeurl/]'>[field:typename/]</a></li>\r\n				",1779,1983);
$z[5][4]=array();
$z[5][4]['type']="son";
$z[5][4]['row']="10";
$z[5][4]['currentstyle']="<li class='active'><a href='~typelink~' ~rel~>~typename~</a></li>";
$z[6]=Array("list","\r\n													\r\n														<li class=\"clearfix\">\r\n								<a href=\"[field:arcurl/]\" class=\"pic pull-left\"><img src=\"[field:litpic/]\"></a>\r\n								<h3><a href=\"[field:arcurl/]\">[field:title/]</a></h3>\r\n								<h4><b>更新时间</b>：[field:pubdate function=\"GetDateMK(@me)\"/]  <b>浏览人数</b>：[field:click/]</h4>\r\n								<p>[field:description function='cn_substr(@me,185)'/]...</p>\r\n								<a href=\"[field:arcurl/]\" class=\"btn pull-right\"></a>\r\n							</li>\r\n									",2265,2798);
$z[6][4]=array();
$z[6][4]['pagesize']="5";
$z[6][4]['titlelen']="60";
$z[7]=Array("pagelist","",2896,2967);
$z[7][4]=array();
$z[7][4]['listitem']="info,index,end,pre,next,pageno";
$z[7][4]['listsize']="5";
$z[8]=Array("include","",3225,3261);
$z[8][4]=array();
$z[8][4]['filename']="right.htm";
$z[9]=Array("include","",3378,3415);
$z[9][4]=array();
$z[9][4]['filename']="footer.htm";

?>