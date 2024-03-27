// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {trackNewline} from "./tokens.js"
import {Highlight} from "./highlight.js"
const spec_Identifier = {__proto__:null,true:66, false:66}
export const parser = LRParser.deserialize({
  version: 14,
  states: ")xQYQPOOO!`QQO'#C^O#XQSO'#CiO#`QWO'#CkO#eQPO'#CjO#lO`O'#CnO#wOpO'#CoOOQO'#C{'#C{OOQO'#Cq'#CqQYQPOOOOQO'#Cs'#CsO$qQQO,58xOOQO'#Cc'#CcO%mQQO'#CrO&]QQO'#CfOOQO'#Cr'#CrO&dQQO,58xOOQO,58x,58xO']QSO,59TO'dQSO'#CrO'kQSO,59TOOQO,59T,59TO'rQWO,59VO'wQWO'#CmOOQO,59U,59UO#eQPO,59UOOOO'#Cu'#CuO'|O`O,59YOOQO,59Y,59YOOOO'#Cv'#CvO(XOpO,59ZOOQO,59Z,59ZOOQO-E6o-E6oOOQO-E6q-E6qO)UQQO,59^OOQO,59^,59^OOQO1G.d1G.dO)]QQO,59PO*SQQO,59QO*ZQQO'#CtOOQO'#Ct'#CtO*xQQO,59QOOQO,59Q,59QO+PQQO1G.dOOQO-E6p-E6pO+WQSO,59^OOQO1G.o1G.oO+_QSO1G.oOOQO1G.q1G.qO+fQWO,59XOOQO1G.p1G.pOOOO-E6s-E6sOOQO1G.t1G.tOOOO-E6t-E6tOOQO1G.u1G.uOOQO1G.k1G.kO+kQQO,59`OOQO,59`,59`OOQO1G.l1G.lO,YQQO1G.lOOQO-E6r-E6rOOQO7+$O7+$OP$PQQO'#CsOOQO7+$Z7+$ZOOQO1G.s1G.sOOQO7+$W7+$WP)kQQO'#CsP&kQQO'#Cs",
  stateData: ",l~OmOSnOS~ORPOdWOwQOyRO|TO!QUO~OS]OT_OU_OW_OZ_OpYOq[Os^Ot_Ov_O~O[aO~PnOScOT_OU_OW_OZ_OpYOq[Os^Ot_Ov_O~OxeO~P!gO`fO~O{gO~PYO}jO!OjO!PlO~O!RmO!SoO~OSrOTsOUsOWsOZsOpYOq[Os^OtsOvsO~O[tO~P$POruOSfXTfXUfXWfXZfXpfXqfXsfXtfXvfX~O[fX~P$xOSwOUxOWxOpYOq[Os^OtxO~OuzO~P%tO[tO~PnOS}OTsOUsOWsOZsOpYOq[Os^OtsOvsO~Ox!OO~P&kOxfX~P$xOx!OO~P!gOz!QO~O`!RO~O}jO!OjO!P!UO~O!RmO!S!WO~OruOSfaTfaUfaWfaZfapfaqfasfatfavfa~O[fa~P(aOS!XOU!XOW!XOq[O~OS!YOU!ZOW!ZOpYOq[Os^Ot!ZO~Ou![O~P)kOruOShXUhXWhXphXqhXshXthXuhX~Ou![O~P%tO[!_O~P$POxfa~P(aOx!aO~P&kOz!bO~OruOShaUhaWhaphaqhashathauha~Ou!cO~P)kO`m`npndTST~",
  goto: "$spPPqPPPPwP!c!cPPqq!zP#QqqP#W#b#l$Z$a$gPPPP$mXVOSXiW_PQ`d[sZb{!P!`!eSx^yQ!XuV!Zv!]!dW_PQ`d[sZb{!P!`!eSx^yV!Zv!]!dXSOSXiQhSR!SiQXOQiSTpXiQ`PQdQT|`dQZPQbQbqZbv{!P!]!`!d!eQv^Q{`Q!PdR!]yQy^R!^yQkTR!TkQnUR!VnXWOSXi",
  nodeNames: "⚠ Template Insert {{ Identifier BIHelper Number Bool String Equa Subexp ~ }} Escape RawBlock RawOpen Any RawClose BlockComment OnelineComment Text",
  maxTerm: 50,
  context: trackNewline,
  propSources: [Highlight],
  skippedNodes: [0],
  repeatNodeCount: 6,
  tokenData: "!F`~R!_OX%QXY&wYZ,yZ[&w[])T]^,y^p%Qpq&wqr%Qrs.vst6mtu>Ruw%QwxByxyIhyzJTz{6m{!O%Q!O!PJp!P!Q6m!Q!R!!O!R![!#p![!_%Q!_!`!+n!`!a!,Z!a!b%Q!b!c>R!c!}>R!}#Q%Q#Q#R!,v#R#S>R#S#T%Q#T#X>R#X#Y!-c#Y#o>R#o#p!5k#p#q!7Y#q#r!7p#r#s!9|#s#y%Q#y#z)T#z$f%Q$f$g&w$g#BY>R#BY#BZ!:i#BZ$IS>R$IS$I_!:i$I_$I|>R$I|$I}!Ce$I}$JO!Ce$JO$JT>R$JT$JU!:i$JU$KV>R$KV$KW!:i$KW&FU>R&FU&FV!:i&FV;'S>R;'S;=`Bs<%l?HT>R?HT?HU!@l?HUO>Rt%XU`pdSO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%QS%nUO#o&Q#p;'S&Q;'S;=`&f<%l~&Q~O&Q~~&lS&VTdSO#o&Q#o#p%k#p;'S&Q;'S;=`&f<%lO&QS&iP;=`<%l&QS&qOdSt&tP;=`<%l%Q~'So`pm~phdSOX%QXY&wYZ)TZ[&w[^)T^p%Qpq&wq#o%Q#o#p%k#p#r&Q#r#y%Q#y#z)T#z$f%Q$f$g&w$g#BY%Q#BY#BZ&w#BZ$IS%Q$IS$I_&w$I_$I|%Q$I|$JO)T$JO$JT%Q$JT$JU&w$JU$KV%Q$KV$KW&w$KW&FU%Q&FU&FV&w&FV;'S%Q;'S;=`&q<%l?HT%Q?HT?HU+O?HUO%Q!^)^j`pphdSOX%QX^)T^p%Qpq)Tq#o%Q#o#p%k#p#r&Q#r#y%Q#y#z)T#z$f%Q$f$g)T$g#BY%Q#BY#BZ)T#BZ$IS%Q$IS$I_)T$I_$I|%Q$I|$JO)T$JO$JT%Q$JT$JU)T$JU$KV%Q$KV$KW)T$KW&FU%Q&FU&FV)T&FV;'S%Q;'S;=`&q<%lO%Q~+Xj`pm~dSOX%QXY+OYZ%QZ[+O[p%Qpq+Oq#o%Q#o#p%k#p#r&Q#r$f%Q$f$g+O$g#BY%Q#BY#BZ+O#BZ$IS%Q$IS$I_+O$I_$JT%Q$JT$JU+O$JU$KV%Q$KV$KW+O$KW&FU%Q&FU&FV+O&FV;'S%Q;'S;=`&q<%l?HT%Q?HT?HU+O?HUO%Q~-Uj`pn~phdSOX%QX^)T^p%Qpq)Tq#o%Q#o#p%k#p#r&Q#r#y%Q#y#z)T#z$f%Q$f$g)T$g#BY%Q#BY#BZ)T#BZ$IS%Q$IS$I_)T$I_$I|%Q$I|$JO)T$JO$JT%Q$JT$JU)T$JU$KV%Q$KV$KW)T$KW&FU%Q&FU&FV)T&FV;'S%Q;'S;=`&q<%lO%Q!^/PYWh`pdSOr.vrs/os#O.v#O#P0[#P#o.v#o#p0x#p#r1p#r;'S.v;'S;=`6g<%lO.v!^/xUWh`pdSO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^0cV`pdSO#o.v#o#p0x#p#r1p#r;'S.v;'S;=`5x;=`<%l4Q<%lO.vl0}ZWhOr1prs2ds#O1p#O#P2z#P#o1p#o#p4Q#p;'S1p;'S;=`5r<%l~1p~O1p~~&ll1wXWhdSOr1prs2ds#O1p#O#P2z#P#o1p#o#p0x#p;'S1p;'S;=`5r<%lO1pl2kTWhdSO#o&Q#o#p%k#p;'S&Q;'S;=`&f<%lO&Ql3PUdSO#o1p#o#p0x#p;'S1p;'S;=`3c;=`<%l4Q<%lO1pl3hWWhOr4Qrs4ls#O4Q#O#P4q#P;'S4Q;'S;=`5l;=`<%l1p<%lO4Qh4VVWhOr4Qrs4ls#O4Q#O#P4q#P;'S4Q;'S;=`5l<%lO4Qh4qOWhh4tRO;'S4Q;'S;=`4};=`O4Qh5SWWhOr4Qrs4ls#O4Q#O#P4q#P;'S4Q;'S;=`5l;=`<%l4Q<%lO4Qh5oP;=`<%l4Ql5uP;=`<%l1p!^5}WWhOr4Qrs4ls#O4Q#O#P4q#P;'S4Q;'S;=`5l;=`<%l.v<%lO4Q!^6jP;=`<%l.v!^6ta`pdSOt%Qtu7yu!O%Q!O!P<q!P!b%Q!b!c7y!c!}7y!}#R%Q#R#S7y#S#T%Q#T#o7y#o#p%k#p#r&Q#r$g%Q$g;'S7y;'S;=`<k<%lO7y!^8Se`pdSThOs%Qst7ytu7yu}%Q}!O7y!O!P9e!P!Q%Q!Q![7y![!b%Q!b!c7y!c!}7y!}#R%Q#R#S7y#S#T%Q#T#o7y#o#p%k#p#r&Q#r$g%Q$g;'S7y;'S;=`<k<%lO7y!^9ne`pdSThOs%Qst7ytu7yu}%Q}!O7y!O!P;P!P!Q%Q!Q![7y![!b%Q!b!c7y!c!}7y!}#R%Q#R#S7y#S#T%Q#T#o7y#o#p%k#p#r&Q#r$g%Q$g;'S7y;'S;=`<k<%lO7y!^;Ye`pdSThOs%Qst7ytu7yu}%Q}!O7y!O!P;P!P!Q7y!Q![7y![!b%Q!b!c7y!c!}7y!}#R%Q#R#S7y#S#T%Q#T#o7y#o#p%k#p#r&Q#r$g%Q$g;'S7y;'S;=`<k<%lO7y!^<nP;=`<%l7y!^<xW`pdSO!O%Q!O!P=b!P#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^=iW`pdSO!P%Q!P!Q7y!Q#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^>[e`pdSShOs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#o>R#o#p%k#p#r&Q#r$g%Q$g;'S>R;'S;=`Bs<%lO>R!^?ve`pdSShOs%Qst>Rtu>Ru}%Q}!O>R!O!PAX!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#o>R#o#p%k#p#r&Q#r$g%Q$g;'S>R;'S;=`Bs<%lO>R!^Abe`pdSShOs%Qst>Rtu>Ru}%Q}!O>R!O!PAX!P!Q>R!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#o>R#o#p%k#p#r&Q#r$g%Q$g;'S>R;'S;=`Bs<%lO>R!^BvP;=`<%l>R!^CSYWh`pdSOwBywx/ox#OBy#O#PCr#P#oBy#o#pD`#p#rEW#r;'SBy;'S;=`Ib<%lOBy!^CyV`pdSO#oBy#o#pD`#p#rEW#r;'SBy;'S;=`Hs;=`<%lGQ<%lOBylDeZWhOwEWwx2dx#OEW#O#PEz#P#oEW#o#pGQ#p;'SEW;'S;=`Hm<%l~EW~OEW~~&llE_XWhdSOwEWwx2dx#OEW#O#PEz#P#oEW#o#pD`#p;'SEW;'S;=`Hm<%lOEWlFPUdSO#oEW#o#pD`#p;'SEW;'S;=`Fc;=`<%lGQ<%lOEWlFhWWhOwGQwx4lx#OGQ#O#PGl#P;'SGQ;'S;=`Hg;=`<%lEW<%lOGQhGVVWhOwGQwx4lx#OGQ#O#PGl#P;'SGQ;'S;=`Hg<%lOGQhGoRO;'SGQ;'S;=`Gx;=`OGQhG}WWhOwGQwx4lx#OGQ#O#PGl#P;'SGQ;'S;=`Hg;=`<%lGQ<%lOGQhHjP;=`<%lGQlHpP;=`<%lEW!^HxWWhOwGQwx4lx#OGQ#O#PGl#P;'SGQ;'S;=`Hg;=`<%lBy<%lOGQ!^IeP;=`<%lBy!^IqUsh`pdSO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q|J^UuW`pdSO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^JwY`pdSO!O%Q!O!PKg!P!Q%Q!Q![LW![#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^KnW`pdSO!P%Q!P!Q>R!Q#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^La^Uh`pdSO!Q%Q!Q![LW![!g%Q!g!hM]!h#R%Q#R#SLW#S#X%Q#X#YM]#Y#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^Md^`pdSO{%Q{|N`|}%Q}!ON`!O!Q%Q!Q![! V![#R%Q#R#S! V#S#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^NgY`pdSO!Q%Q!Q![! V![#R%Q#R#S! V#S#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^! `YUh`pdSO!Q%Q!Q![! V![#R%Q#R#S! V#S#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!!XgUh`pdSO!O%Q!O!PLW!P!Q%Q!Q![!#p![!g%Q!g!hM]!h#R%Q#R#S!#p#S#U%Q#U#V!%n#V#X%Q#X#YM]#Y#b%Q#b#c!%R#c#d!'j#d#l%Q#l#m!)`#m#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!#ybUh`pdSO!O%Q!O!PLW!P!Q%Q!Q![!#p![!g%Q!g!hM]!h#R%Q#R#S!#p#S#X%Q#X#YM]#Y#b%Q#b#c!%R#c#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!%[UUh`pdSO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!%uZ`pdSO!Q%Q!Q!R!&h!R!S!&h!S#R%Q#R#S!&h#S#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!&q]Uh`pdSO!Q%Q!Q!R!&h!R!S!&h!S#R%Q#R#S!&h#S#b%Q#b#c!%R#c#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!'qY`pdSO!Q%Q!Q!Y!(a!Y#R%Q#R#S!(a#S#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!(j[Uh`pdSO!Q%Q!Q!Y!(a!Y#R%Q#R#S!(a#S#b%Q#b#c!%R#c#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!)g^`pdSO!Q%Q!Q![!*c![!c%Q!c!i!*c!i#R%Q#R#S!*c#S#T%Q#T#Z!*c#Z#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!*l`Uh`pdSO!Q%Q!Q![!*c![!c%Q!c!i!*c!i#R%Q#R#S!*c#S#T%Q#T#Z!*c#Z#b%Q#b#c!%R#c#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!+wUrh`pdSO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!,dU`pdSThO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!-PUvh`pdSO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!-lg`pdSShOs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#`>R#`#a!/T#a#o>R#o#p%k#p#r&Q#r$g%Q$g;'S>R;'S;=`Bs<%lO>R!^!/^g`pdSShOs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#g>R#g#h!0u#h#o>R#o#p%k#p#r&Q#r$g%Q$g;'S>R;'S;=`Bs<%lO>R!^!1Og`pdSShOs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#X>R#X#Y!2g#Y#o>R#o#p%k#p#r&Q#r$g%Q$g;'S>R;'S;=`Bs<%lO>R!^!2rg`pdSThShOp%Qpq!4Zqs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#o>R#o#p%k#p#r&Q#r$g%Q$g;'S>R;'S;=`Bs<%lO>R!^!4bW`pdSO#]%Q#]#^!4z#^#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q!^!5RW`pdSO#Y%Q#Y#Z!,Z#Z#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q~!5nVO#o&Q#o#p!6T#p;'S&Q;'S;=`&f<%l~&Q~O&Q~~&l~!6YQR~qr!6`#o#p!6s~!6eP!Q~}!O!6h~!6kP}!O!6n~!6sO|~~!6xPw~#o#p!6{~!7QPy~!P!Q!7T~!7YO{~l!7aTthdSO#o&Q#o#p%k#p;'S&Q;'S;=`&f<%lO&Q!^!7uVdSO#o&Q#o#p%k#p#q&Q#q#r!8[#r;'S&Q;'S;=`&f<%lO&Q!^!8cV[WdSO#o&Q#o#p%k#p#q&Q#q#r!8x#r;'S&Q;'S;=`&f<%lO&Q!U!9PVx`dSO#o&Q#o#p%k#p#q&Q#q#r!9f#r;'S&Q;'S;=`&f<%lO&Qt!9mTzpdSO#o&Q#o#p%k#p;'S&Q;'S;=`&f<%lO&Q!^!:VUZh`pdSO#o%Q#o#p%k#p#r&Q#r;'S%Q;'S;=`&q<%lO%Q~!:v}`pm~phdSShOX%QXY&wYZ)TZ[&w[^)T^p%Qpq&wqs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#o>R#o#p%k#p#r&Q#r#y%Q#y#z)T#z$f%Q$f$g&w$g#BY>R#BY#BZ!:i#BZ$IS>R$IS$I_!:i$I_$I|>R$I|$JO!=s$JO$JT>R$JT$JU!:i$JU$KV>R$KV$KW!:i$KW&FU>R&FU&FV!:i&FV;'S>R;'S;=`Bs<%l?HT>R?HT?HU!@l?HUO>R!^!>Ox`pphdSShOX%QX^)T^p%Qpq)Tqs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#o>R#o#p%k#p#r&Q#r#y%Q#y#z)T#z$f%Q$f$g)T$g#BY>R#BY#BZ!=s#BZ$IS>R$IS$I_!=s$I_$I|>R$I|$JO!=s$JO$JT>R$JT$JU!=s$JU$KV>R$KV$KW!=s$KW&FU>R&FU&FV!=s&FV;'S>R;'S;=`Bs<%lO>R~!@wx`pm~dSShOX%QXY+OYZ%QZ[+O[p%Qpq+Oqs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#o>R#o#p%k#p#r&Q#r$f%Q$f$g+O$g#BY>R#BY#BZ!@l#BZ$IS>R$IS$I_!@l$I_$JT>R$JT$JU!@l$JU$KV>R$KV$KW!@l$KW&FU>R&FU&FV!@l&FV;'S>R;'S;=`Bs<%l?HT>R?HT?HU!@l?HUO>R~!Crx`pn~phdSShOX%QX^)T^p%Qpq)Tqs%Qst>Rtu>Ru}%Q}!O>R!O!P?m!P!Q%Q!Q![>R![!b%Q!b!c>R!c!}>R!}#R%Q#R#S>R#S#T%Q#T#o>R#o#p%k#p#r&Q#r#y%Q#y#z)T#z$f%Q$f$g)T$g#BY>R#BY#BZ!=s#BZ$IS>R$IS$I_!=s$I_$I|>R$I|$JO!=s$JO$JT>R$JT$JU!=s$JU$KV>R$KV$KW!=s$KW&FU>R&FU&FV!=s&FV;'S>R;'S;=`Bs<%lO>R",
  tokenizers: [2, 3, 4, 5, new LocalTokenGroup("v~RQYZX}!O^~^O!O~~aP}!Od~gP#q#rj~mP#q#rp~uO!P~~", 37, 45), new LocalTokenGroup("b~RP#q#rU~XP#q#r[~aO!S~~", 17, 49)],
  topRules: {"Template":[0,1]},
  specialized: [{term: 4, get: (value) => spec_Identifier[value] || -1}],
  tokenPrec: 523
})
