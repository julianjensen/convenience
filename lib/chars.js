/** ****************************************************************************************************
 * File: chars
 * Project: parser-predictor
 * @author Julian on 11/18/2016


 Mathematical Operators
 	    0	1	2	3	4	5	6	7	8	9	A	B	C	D	E	F
U+220x	∀	∁	∂	∃	∄	∅	∆	∇	∈	∉	∊	∋	∌	∍	∎	∏
U+221x	∐	∑	−	∓	∔	∕	∖	∗	∘	∙	√	∛	∜	∝	∞	∟
U+222x	∠	∡	∢	∣	∤	∥	∦	∧	∨	∩	∪	∫	∬	∭	∮	∯
U+223x	∰	∱	∲	∳	∴	∵	∶	∷	∸	∹	∺	∻	∼	∽	∾	∿
U+224x	≀	≁	≂	≃	≄	≅	≆	≇	≈	≉	≊	≋	≌	≍	≎	≏
U+225x	≐	≑	≒	≓	≔	≕	≖	≗	≘	≙	≚	≛	≜	≝	≞	≟
U+226x	≠	≡	≢	≣	≤	≥	≦	≧	≨	≩	≪	≫	≬	≭	≮	≯
U+227x	≰	≱	≲	≳	≴	≵	≶	≷	≸	≹	≺	≻	≼	≽	≾	≿
U+228x	⊀	⊁	⊂	⊃	⊄	⊅	⊆	⊇	⊈	⊉	⊊	⊋	⊌	⊍	⊎	⊏
U+229x	⊐	⊑	⊒	⊓	⊔	⊕	⊖	⊗	⊘	⊙	⊚	⊛	⊜	⊝	⊞	⊟
U+22Ax	⊠	⊡	⊢	⊣	⊤	⊥	⊦	⊧	⊨	⊩	⊪	⊫	⊬	⊭	⊮	⊯
U+22Bx	⊰	⊱	⊲	⊳	⊴	⊵	⊶	⊷	⊸	⊹	⊺	⊻	⊼	⊽	⊾	⊿
U+22Cx	⋀	⋁	⋂	⋃	⋄	⋅	⋆	⋇	⋈	⋉	⋊	⋋	⋌	⋍	⋎	⋏
U+22Dx	⋐	⋑	⋒	⋓	⋔	⋕	⋖	⋗	⋘	⋙	⋚	⋛	⋜	⋝	⋞	⋟
U+22Ex	⋠	⋡	⋢	⋣	⋤	⋥	⋦	⋧	⋨	⋩	⋪	⋫	⋬	⋭	⋮	⋯
U+22Fx	⋰	⋱	⋲	⋳	⋴	⋵	⋶	⋷	⋸	⋹	⋺	⋻	⋼	⋽	⋾	⋿

Serif	Sans-serif	Script	Fraktur	Mono-space	Double-struck
Normal	Bold	Italic	Bold italic	| Normal	Bold	Italic	Bold italic	| Normal	Bold	| Normal	Bold	| Normal	Bold
A	𝐀	𝐴	𝑨	𝖠	𝗔	𝘈	𝘼	𝒜	𝓐	𝔄	𝕬	𝙰	𝔸
B	𝐁	𝐵	𝑩	𝖡	𝗕	𝘉	𝘽	ℬ	𝓑	𝔅	𝕭	𝙱	𝔹
C	𝐂	𝐶	𝑪	𝖢	𝗖	𝘊	𝘾	𝒞	𝓒	ℭ	𝕮	𝙲	ℂ
D	𝐃	𝐷	𝑫	𝖣	𝗗	𝘋	𝘿	𝒟	𝓓	𝔇	𝕯	𝙳	𝔻
E	𝐄	𝐸	𝑬	𝖤	𝗘	𝘌	𝙀	ℰ	𝓔	𝔈	𝕰	𝙴	𝔼
F	𝐅	𝐹	𝑭	𝖥	𝗙	𝘍	𝙁	ℱ	𝓕	𝔉	𝕱	𝙵	𝔽
G	𝐆	𝐺	𝑮	𝖦	𝗚	𝘎	𝙂	𝒢	𝓖	𝔊	𝕲	𝙶	𝔾
H	𝐇	𝐻	𝑯	𝖧	𝗛	𝘏	𝙃	ℋ	𝓗	ℌ	𝕳	𝙷	ℍ
I	𝐈	𝐼	𝑰	𝖨	𝗜	𝘐	𝙄	ℐ	𝓘	ℑ	𝕴	𝙸	𝕀
J	𝐉	𝐽	𝑱	𝖩	𝗝	𝘑	𝙅	𝒥	𝓙	𝔍	𝕵	𝙹	𝕁
K	𝐊	𝐾	𝑲	𝖪	𝗞	𝘒	𝙆	𝒦	𝓚	𝔎	𝕶	𝙺	𝕂
L	𝐋	𝐿	𝑳	𝖫	𝗟	𝘓	𝙇	ℒ	𝓛	𝔏	𝕷	𝙻	𝕃
M	𝐌	𝑀	𝑴	𝖬	𝗠	𝘔	𝙈	ℳ	𝓜	𝔐	𝕸	𝙼	𝕄
N	𝐍	𝑁	𝑵	𝖭	𝗡	𝘕	𝙉	𝒩	𝓝	𝔑	𝕹	𝙽	ℕ
O	𝐎	𝑂	𝑶	𝖮	𝗢	𝘖	𝙊	𝒪	𝓞	𝔒	𝕺	𝙾	𝕆
P	𝐏	𝑃	𝑷	𝖯	𝗣	𝘗	𝙋	𝒫	𝓟	𝔓	𝕻	𝙿	ℙ
Q	𝐐	𝑄	𝑸	𝖰	𝗤	𝘘	𝙌	𝒬	𝓠	𝔔	𝕼	𝚀	ℚ
R	𝐑	𝑅	𝑹	𝖱	𝗥	𝘙	𝙍	ℛ	𝓡	ℜ	𝕽	𝚁	ℝ
S	𝐒	𝑆	𝑺	𝖲	𝗦	𝘚	𝙎	𝒮	𝓢	𝔖	𝕾	𝚂	𝕊
T	𝐓	𝑇	𝑻	𝖳	𝗧	𝘛	𝙏	𝒯	𝓣	𝔗	𝕿	𝚃	𝕋
U	𝐔	𝑈	𝑼	𝖴	𝗨	𝘜	𝙐	𝒰	𝓤	𝔘	𝖀	𝚄	𝕌
V	𝐕	𝑉	𝑽	𝖵	𝗩	𝘝	𝙑	𝒱	𝓥	𝔙	𝖁	𝚅	𝕍
W	𝐖	𝑊	𝑾	𝖶	𝗪	𝘞	𝙒	𝒲	𝓦	𝔚	𝖂	𝚆	𝕎
X	𝐗	𝑋	𝑿	𝖷	𝗫	𝘟	𝙓	𝒳	𝓧	𝔛	𝖃	𝚇	𝕏
Y	𝐘	𝑌	𝒀	𝖸	𝗬	𝘠	𝙔	𝒴	𝓨	𝔜	𝖄	𝚈	𝕐
Z	𝐙	𝑍	𝒁	𝖹	𝗭	𝘡	𝙕	𝒵	𝓩	ℨ	𝖅	𝚉	ℤ
a	𝐚	𝑎	𝒂	𝖺	𝗮	𝘢	𝙖	𝒶	𝓪	𝔞	𝖆	𝚊	𝕒
b	𝐛	𝑏	𝒃	𝖻	𝗯	𝘣	𝙗	𝒷	𝓫	𝔟	𝖇	𝚋	𝕓
c	𝐜	𝑐	𝒄	𝖼	𝗰	𝘤	𝙘	𝒸	𝓬	𝔠	𝖈	𝚌	𝕔
d	𝐝	𝑑	𝒅	𝖽	𝗱	𝘥	𝙙	𝒹	𝓭	𝔡	𝖉	𝚍	𝕕
e	𝐞	𝑒	𝒆	𝖾	𝗲	𝘦	𝙚	ℯ	𝓮	𝔢	𝖊	𝚎	𝕖
f	𝐟	𝑓	𝒇	𝖿	𝗳	𝘧	𝙛	𝒻	𝓯	𝔣	𝖋	𝚏	𝕗
g	𝐠	𝑔	𝒈	𝗀	𝗴	𝘨	𝙜	ℊ	𝓰	𝔤	𝖌	𝚐	𝕘
h	𝐡	ℎ	𝒉	𝗁	𝗵	𝘩	𝙝	𝒽	𝓱	𝔥	𝖍	𝚑	𝕙
i	𝐢	𝑖	𝒊	𝗂	𝗶	𝘪	𝙞	𝒾	𝓲	𝔦	𝖎	𝚒	𝕚
j	𝐣	𝑗	𝒋	𝗃	𝗷	𝘫	𝙟	𝒿	𝓳	𝔧	𝖏	𝚓	𝕛
k	𝐤	𝑘	𝒌	𝗄	𝗸	𝘬	𝙠	𝓀	𝓴	𝔨	𝖐	𝚔	𝕜
l	𝐥	𝑙	𝒍	𝗅	𝗹	𝘭	𝙡	𝓁	𝓵	𝔩	𝖑	𝚕	𝕝
m	𝐦	𝑚	𝒎	𝗆	𝗺	𝘮	𝙢	𝓂	𝓶	𝔪	𝖒	𝚖	𝕞
n	𝐧	𝑛	𝒏	𝗇	𝗻	𝘯	𝙣	𝓃	𝓷	𝔫	𝖓	𝚗	𝕟
o	𝐨	𝑜	𝒐	𝗈	𝗼	𝘰	𝙤	ℴ	𝓸	𝔬	𝖔	𝚘	𝕠
p	𝐩	𝑝	𝒑	𝗉	𝗽	𝘱	𝙥	𝓅	𝓹	𝔭	𝖕	𝚙	𝕡
q	𝐪	𝑞	𝒒	𝗊	𝗾	𝘲	𝙦	𝓆	𝓺	𝔮	𝖖	𝚚	𝕢
r	𝐫	𝑟	𝒓	𝗋	𝗿	𝘳	𝙧	𝓇	𝓻	𝔯	𝖗	𝚛	𝕣
s	𝐬	𝑠	𝒔	𝗌	𝘀	𝘴	𝙨	𝓈	𝓼	𝔰	𝖘	𝚜	𝕤
t	𝐭	𝑡	𝒕	𝗍	𝘁	𝘵	𝙩	𝓉	𝓽	𝔱	𝖙	𝚝	𝕥
u	𝐮	𝑢	𝒖	𝗎	𝘂	𝘶	𝙪	𝓊	𝓾	𝔲	𝖚	𝚞	𝕦
v	𝐯	𝑣	𝒗	𝗏	𝘃	𝘷	𝙫	𝓋	𝓿	𝔳	𝖛	𝚟	𝕧
w	𝐰	𝑤	𝒘	𝗐	𝘄	𝘸	𝙬	𝓌	𝔀	𝔴	𝖜	𝚠	𝕨
x	𝐱	𝑥	𝒙	𝗑	𝘅	𝘹	𝙭	𝓍	𝔁	𝔵	𝖝	𝚡	𝕩
y	𝐲	𝑦	𝒚	𝗒	𝘆	𝘺	𝙮	𝓎	𝔂	𝔶	𝖞	𝚢	𝕪
z	𝐳	𝑧	𝒛	𝗓	𝘇	𝘻	𝙯	𝓏	𝔃	𝔷	𝖟	𝚣	𝕫
ı	N/A	𝚤	N/A
ȷ	N/A	𝚥	N/A

 Greek letters and symbols
| Normal | Bold | Italic | Bold italic | Sans-serif bold | Sans-serif bold italic
Α	𝚨	𝛢	𝜜	𝝖	𝞐
Β	𝚩	𝛣	𝜝	𝝗	𝞑
Γ	𝚪	𝛤	𝜞	𝝘	𝞒
Δ	𝚫	𝛥	𝜟	𝝙	𝞓
Ε	𝚬	𝛦	𝜠	𝝚	𝞔
Ζ	𝚭	𝛧	𝜡	𝝛	𝞕
Η	𝚮	𝛨	𝜢	𝝜	𝞖
Θ	𝚯	𝛩	𝜣	𝝝	𝞗
Ι	𝚰	𝛪	𝜤	𝝞	𝞘
Κ	𝚱	𝛫	𝜥	𝝟	𝞙
Λ	𝚲	𝛬	𝜦	𝝠	𝞚
Μ	𝚳	𝛭	𝜧	𝝡	𝞛
Ν	𝚴	𝛮	𝜨	𝝢	𝞜
Ξ	𝚵	𝛯	𝜩	𝝣	𝞝
Ο	𝚶	𝛰	𝜪	𝝤	𝞞
Π	𝚷	𝛱	𝜫	𝝥	𝞟
Ρ	𝚸	𝛲	𝜬	𝝦	𝞠
ϴ	𝚹	𝛳	𝜭	𝝧	𝞡
Σ	𝚺	𝛴	𝜮	𝝨	𝞢
Τ	𝚻	𝛵	𝜯	𝝩	𝞣
Υ	𝚼	𝛶	𝜰	𝝪	𝞤
Φ	𝚽	𝛷	𝜱	𝝫	𝞥
Χ	𝚾	𝛸	𝜲	𝝬	𝞦
Ψ	𝚿	𝛹	𝜳	𝝭	𝞧
Ω	𝛀	𝛺	𝜴	𝝮	𝞨
∇	𝛁	𝛻	𝜵	𝝯	𝞩
α	𝛂	𝛼	𝜶	𝝰	𝞪
β	𝛃	𝛽	𝜷	𝝱	𝞫
γ	𝛄	𝛾	𝜸	𝝲	𝞬
δ	𝛅	𝛿	𝜹	𝝳	𝞭
ε	𝛆	𝜀	𝜺	𝝴	𝞮
ζ	𝛇	𝜁	𝜻	𝝵	𝞯
η	𝛈	𝜂	𝜼	𝝶	𝞰
θ	𝛉	𝜃	𝜽	𝝷	𝞱
ι	𝛊	𝜄	𝜾	𝝸	𝞲
κ	𝛋	𝜅	𝜿	𝝹	𝞳
λ	𝛌	𝜆	𝝀	𝝺	𝞴
μ	𝛍	𝜇	𝝁	𝝻	𝞵
ν	𝛎	𝜈	𝝂	𝝼	𝞶
ξ	𝛏	𝜉	𝝃	𝝽	𝞷
ο	𝛐	𝜊	𝝄	𝝾	𝞸
π	𝛑	𝜋	𝝅	𝝿	𝞹
ρ	𝛒	𝜌	𝝆	𝞀	𝞺
ς	𝛓	𝜍	𝝇	𝞁	𝞻
σ	𝛔	𝜎	𝝈	𝞂	𝞼
τ	𝛕	𝜏	𝝉	𝞃	𝞽
υ	𝛖	𝜐	𝝊	𝞄	𝞾
φ	𝛗	𝜑	𝝋	𝞅	𝞿
χ	𝛘	𝜒	𝝌	𝞆	𝟀
ψ	𝛙	𝜓	𝝍	𝞇	𝟁
ω	𝛚	𝜔	𝝎	𝞈	𝟂
∂	𝛛	𝜕	𝝏	𝞉	𝟃
ϵ	𝛜	𝜖	𝝐	𝞊	𝟄
ϑ	𝛝	𝜗	𝝑	𝞋	𝟅
ϰ	𝛞	𝜘	𝝒	𝞌	𝟆
ϕ	𝛟	𝜙	𝝓	𝞍	𝟇
ϱ	𝛠	𝜚	𝝔	𝞎	𝟈
ϖ	𝛡	𝜛	𝝕	𝞏	𝟉
Ϝ	𝟊
ϝ	𝟋


        Letterlike Symbols
 	    0	1	2	3	4	5	6	7	8	9	A	B	C	D	E	F
U+210x	℀	℁	ℂ	℃	℄	℅	℆	ℇ	℈	℉	ℊ	ℋ	ℌ	ℍ	ℎ	ℏ
U+211x	ℐ	ℑ	ℒ	ℓ	℔	ℕ	№	℗	℘	ℙ	ℚ	ℛ	ℜ	ℝ	℞	℟
U+212x	℠	℡	™	℣	ℤ	℥	Ω	℧	ℨ	℩	K	Å	ℬ	ℭ	℮	ℯ
U+213x	ℰ	ℱ	Ⅎ	ℳ	ℴ	ℵ	ℶ	ℷ	ℸ	ℹ	℺	℻	ℼ	ℽ	ℾ	ℿ
U+214x	⅀	⅁	⅂	⅃	⅄	ⅅ	ⅆ	ⅇ	ⅈ	ⅉ	⅊	⅋	⅌	⅍	ⅎ	⅏



        Arrows
 	    0	1	2	3	4	5	6	7	8	9	A	B	C	D	E	F
U+219x	←	↑	→	↓	↔	↕	↖	↗	↘	↙	↚	↛	↜	↝	↞	↟
U+21Ax	↠	↡	↢	↣	↤	↥	↦	↧	↨	↩	↪	↫	↬	↭	↮	↯
U+21Bx	↰	↱	↲	↳	↴	↵	↶	↷	↸	↹	↺	↻	↼	↽	↾	↿
U+21Cx	⇀	⇁	⇂	⇃	⇄	⇅	⇆	⇇	⇈	⇉	⇊	⇋	⇌	⇍	⇎	⇏
U+21Dx	⇐	⇑	⇒	⇓	⇔	⇕	⇖	⇗	⇘	⇙	⇚	⇛	⇜	⇝	⇞	⇟
U+21Ex	⇠	⇡	⇢	⇣	⇤	⇥	⇦	⇧	⇨	⇩	⇪	⇫	⇬	⇭	⇮	⇯
U+21Fx	⇰	⇱	⇲	⇳	⇴	⇵	⇶	⇷	⇸	⇹	⇺	⇻	⇼	⇽	⇾	⇿

        Supplemental Arrows-A
 	    0	1	2	3	4	5	6	7	8	9	A	B	C	D	E	F
U+27Fx	⟰	⟱	⟲	⟳	⟴	⟵	⟶	⟷	⟸	⟹	⟺	⟻	⟼	⟽	⟾	⟿



 /*
 /*



 ⎛
 ⎜
 ⎝

 ⎞
 ⎟
 ⎠
 ⎡
 ⎢
 ⎣

 ⎤
 ⎥
 ⎦

 ⎧
 ⎨
 ⎩

 ⎪

 ⎫
 ⎬
 ⎭

 ⎮

 ⎲
 ⎳




 *******************************************************************************************************/
'use strict';
// @formatter:off

const chars = {
    parenthesisUL: '⎛',
    parenthesisML: '⎜',
    parenthesisLL: '⎝',
    parenthesisUR: '⎞',
    parenthesisMR: '⎟',
    parenthesisLR: '⎠',

    parentheses: {
        left: [ '⎛',
                '⎜',
                '⎝'],
        right: [ '⎞',
                 '⎟',
                 '⎠']
    },

    bracketUL: '⎡',
    bracketML: '⎢',
    bracketLL: '⎣',
    bracketUR: '⎤',
    bracketMR: '⎥',
    bracketLR: '⎦',

    brackets: {
        left: [ '⎡',
                '⎢',
                '⎣'],
        right: [ '⎤',
                 '⎥',
                 '⎦' ]
    },

    braceUL: '⎧',
    braceML: '⎨',
    braceLL: '⎩',
    braceUR: '⎫',
    braceMR: '⎬',
    braceLR: '⎭',

    braces: {
        left: [ '⎧',
                '⎨',
                '⎩' ],
        right: [ '⎫',
                 '⎬',
                 '⎭' ]
    },

    copyright:  '©',
    registered: '®',
    circle:     '●',
    dot:        '∙',
    spot:       '⦁',
    not:        '¬',
    notL:       '￢',
    tacks:      [ '⊢', '⊣', '⊤', '⊥' ],
    arrows:     [ '←', '↑', '→', '↓' ],
    fat:        [ '⇐', '⇑', '⇒', '⇓' ],
    approx:     '≈',

    and:        '∧',
    or:         '∨',
    andL:       '⋀',
    orL:        '⋁',

    union:      '∪',
    unionL:     '⋃',
    intersect:  '∩',
    intersectL: '⋂',

    forAll:     '∀',
    partial:    '∂',
    exists:     '∃',
    existsN:    '∄',
    empty:      '∅',
    belongs:    '∈',
    belongsN:   '∉',
    belongsS:   '∊',
    belongsR:   '∋',
    belongsRN:  '∌',
    belongsRNS: '∍',

    product:    '∏',
    coproduct:  '∐',
    sum:        '∑',
    infinity:   '∞',

    tm:         '™',

    real:       'ℝ',
    complex:    'ℂ',
    rational:   'ℚ',
    integer:    'ℤ',
    natural:    'ℕ',

    celsius:    '℃',
    fahrenheit: '℉',
    aleph:      'ℵ',
    greekU:     'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΣΤΥΦΧΨΩ',
    greekL:     'αβγδεζηθικλμνξοπρςστυφχψω',
    greekBU:    '𝚨𝚩𝚪𝚫𝚬𝚭𝚮𝚯𝚰𝚱𝚲𝚳𝚴𝚵𝚶𝚷𝚸𝚹𝚺𝚺𝚻𝚼𝚽𝚾𝚿𝛀',
    greekBL:    '𝛂𝛃𝛄𝛅𝛆𝛇𝛈𝛉𝛊𝛋𝛌𝛍𝛎𝛏𝛐𝛑𝛒𝛓𝛔𝛕𝛖𝛗𝛘𝛙𝛚',
    greekIU:    '𝛢𝛣𝛤𝛥𝛦𝛧𝛨𝛩𝛪𝛫𝛬𝛭𝛮𝛯𝛰𝛱𝛲𝛳𝛴𝛵𝛶𝛷𝛸𝛹𝛺',
    greekIL:    '𝛼𝛽𝛾𝛿𝜀𝜁𝜂𝜃𝜄𝜅𝜆𝜇𝜈𝜉𝜊𝜋𝜌𝜍𝜎𝜏𝜐𝜑𝜒𝜓𝜔',

    italicU:    '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠',
    italicL:    '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺',
    italicBU:   '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔',
    italicBL:   '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮',

    poweri:     'ⁱ',
    squared:    '²',
    cubed:      '³',
    superPlus:  '⁺',
    superMinus:  '⁻',
    superEquals:  '⁼',
    superParensLeft:  '⁽',
    superParensRight:  '⁾',
    supern:     'ⁿ',
    superZero:  [ '⁰', '', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹' ],
    superscript: { A: 'ᴬ', B: 'ᴮ', C: 'c', D: 'ᴰ', E: 'ᴱ', F: 'f', G: 'ᴳ', H: 'ᴴ', I: 'ᴵ', J: 'ᴶ', K: 'ᴷ', L: 'ᴸ', M: 'ᴹ', N: 'ᴺ', O: 'ᴼ', P: 'ᴾ', Q: 'q', R: 'ᴿ', T: 'ᵀ', U: 'ᵁ', V: 'ⱽ', W: 'ᵂ', X: 'x', Y: 'y', Z: 'z',
    a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', q: 'q', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ' },

    subscriptNumbers: [ '₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉' ],
    subscript: { '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎' },
    subzero:    '₀',
    subscript:  { a: 'ₐ', e: 'ₑ', h: 'ₕ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', l: 'ₗ', m: 'ₘ', n: 'ₙ', o: 'ₒ', p: 'ₚ', r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', x: 'ₓ' },
    subplus:    '₊',
    subminus:   '₋',
    subequals:  '₌',
    subParensLeft: '₍',
    subParensRight: '₎',

    runes:      'ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ᛫᛬᛭ᛮᛯᛰ',
    futhark:    'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗᛚᛝᛟᛞ',

    planets:    {
        mercury:    '☿',
        venus:      '♀',
        earth:      '♁',
        mars:       '♂',
        jupiter:    '♃',
        saturn:     '♄',
        uranus:     '♅',
        neptune:    '♆',
        pluto:      '♇'     // Yeah, I know, it's not a planet...
    },

    zodiac: {
        aries:      '♈',
        taurus:     '♉',
        gemini:     '♊',
        cancer:     '♋',
        leo:        '♌',
        virgo:      '♍',
        libra:      '♎',
        scorpius:   '♏',
        sagittarius:'♐',
        capricorn:  '♑',
        aquarius:   '♒',
        pisces:     '♓'
    },
    chess:  {
        white: {
            king:   '♔',
            queen:  '♕',
            rook:   '♖',
            bishop: '♗',
            knight: '♘',
            pawn:   '♙'
        },
        black: {
            king:   '♚',
            queen:  '♛',
            rook:   '♜',
            bishop: '♝',
            knight: '♞',
            pawn:   '♟'
        }
    },
    cards: {
        black: {
            spades:     '♠',
            clubs:      '♣',
            hearts:     '♥',
            diamonds:   '♦'
        },
        white: {
            hearts:     '♡',
            diamond:    '♢',
            spades:     '♤',
            clubs:      '♧'
        }
    },
    apparatus: {
        wordOmitted: '⸰',
        wordsOmitted: [ '⸋', '⸌' ],
        replace: '⸀',
        variations: [ '⸂', '⸃' ],
        inserted: '⸆',
        transposed: [ '⸉', '⸊' ],
        transposeIndicator: '⸈',
        separator: '⸱',
        alternatives: [ '|', '¦' ],
        added: [ '⟦', '⟧' ],
        edition: '†'
    },

    check:  '✓',
    checkBold: '✔',
    eks: '✕',
    eksFat: '❌',
    eksBold: '✖',
    eksI: '✗',
    eksIBold: '✘',

    blackSun: '☀',
    blackCloud: '☁',
    umbrella: '☂',
    snowmanWithSnow: '☃',
    comet: '☄',
    blackStar: '★',
    whiteStar: '☆',
    blackPhone: '☎',
    whitePhone: '☏',
    umbrellaRain: '☔',
    hotBeverage: '☕',
    shamrock: '☘',
    blackHandLeft: '☚',
    blackHandRight: '☛',
    pointing: [ '☜', '☝', '☞', '☟' ],
    whiteJollyRoger: '☠',
    radioactive: '☢',
    biohazard: '☣',
    caduceus: '☤',
    ankh: '☥',
    hammerAndSickle: '☭',
    peace: '☮',
    yinYang: '☯',
    whiteSun: '☼',
    sad: '☹',
    whiteGlad: '☺',
    blackGlad: '☻',
    firstQuarterMoon: '☽',
    lastQuarterMoon: '☾',
    female: '♀',
    male: '♂',
    notes: {
        quarter: '♩',
        eight: '♪',
        doubleEights: '♫',
        doubleSixteenth: '♬',
        flat: '♭',
        natural: '♮',
        sharp: '♯'
    },
    whiteRecycle: '♲',
    blackRecycle: '♻',
    handicapped: '♿',
    dice: [ '⚀', '⚁', '⚂', '⚃', '⚄', '⚅' ],
    whiteFlag: '⚐',
    blackFlag: '⚑',
    work: '⚒',
    anchor: '⚓',
    swords: '⚔',
    asclepius: '⚕',
    balance: '⚖',
    chemistry: '⚗',
    flower: '⚘',
    atom: '⚛',
    fleurDeLis: '⚜',
    warning: '⚠',
    doubleFemale: '⚢',
    doubleMale: '⚣',
    whiteMediumCircle: '⚪',
    blackMediumCircle: '⚫',
    whiteSmallCircle: '⚬',
    soccer: '⚽',
    baseball: '⚾',
    squaredKey: '⚿',
    snowmanNoSnow: '⛄',
    sunCloud: '⛅',
    blacklSnowmanSnow: '⛇',
    cloudLightning: '⛈',
    noEntry: '⛔',
    blackTwoway: '⛖',
    whiteTwoway: '⛗',
    truck: '⛟',
    stars: [ '⛤', '⛥', '⛦', '⛧', '✰', '✭', '✮', '✯', '✰', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺' ],
    mountain: '⛰',
    parasol: '⛱',
    golf: '⛳',
    boat: '⛴',
    ship: '⛵',
    skiing: '⛷',
    rollerskates: '⛸',
    ballplayer: '⛹',
    gas: '⛽',
    scissors: [ '✀', '✁', '✂', '✃', '✄' ],
    whiteCheck: '✅',
    circlePhone: '✆',
    plane: '✈',
    envelope: '✉',
    pencils: [ '✎', '✏', '✐' ],
    crosses: [ '✝', '✞', '✟', '✠' ],
    blackQuestionMark: '❓',
    whiteQuestionMark: '❔',
    whiteExclamation: '❕',
    blackExclamation: '❗',
    heart: '❤',
    heartSideways: '❥',
    roundParens: [ '❨', '❩' ],
    boldParens: [ '❪', '❫' ],
    angleBrackets: [ '❬', '❭' ],
    angleBracketsBold: [ '❮', '❯' ],
    angleBracketsFat: [ '❰', '❱' ],
    skinnyParens: [ '❲', '❳' ],
    bracesBold: [ '❴', '❵' ],
    blackCircleNumbersSmall: '❶❷❸❹❺❻❼❽❾❿',
    whiteCircleNumbers: '➀➁➂➃➄➅➆➇➈➉',
    blackCircleNumbers: '➊➋➌➍➎➏➐➑➒➓',

    hiraganaStr:'あいうえおかがきぎくぐけげこごさざしじすずせぜそぞただちぢつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもやゆよらりるれろわゐゑをん',
    hiragana:   {
        a: 'あ',
        i: 'い',
        u: 'う',
        e: 'え',
        o: 'お',
        ka: 'か',
        ga: 'が',
        ki: 'き',
        gi: 'ぎ',
        ku: 'く',
        gu: 'ぐ',
        ke: 'け',
        ge: 'げ',
        ko: 'こ',
        go: 'ご',
        sa: 'さ',
        za: 'ざ',
        shi: 'し',
        ji: 'じ',
        su: 'す',
        tzu: 'ず',
        se: 'せ',
        ze: 'ぜ',
        so: 'そ',
        zo: 'ぞ',
        ta: 'た',
        da: 'だ',
        chi: 'ち',
        di: 'ぢ',
        tsu: 'つ',
        zu: 'づ',
        te: 'て',
        de: 'で',
        to: 'と',
        do: 'ど',
        na: 'な',
        ni: 'に',
        nu: 'ぬ',
        ne: 'ね',
        no: 'の',
        ha: 'は',
        ba: 'ば',
        pa: 'ぱ',
        hi: 'ひ',
        bi: 'び',
        pi: 'ぴ',
        hu: 'ふ',
        bu: 'ぶ',
        pu: 'ぷ',
        he: 'へ',
        be: 'べ',
        pe: 'ぺ',
        ho: 'ほ',
        bo: 'ぼ',
        po: 'ぽ',
        ma: 'ま',
        mi: 'み',
        mu: 'む',
        me: 'め',
        mo: 'も',
        ya: 'や',
        yu: 'ゆ',
        yo: 'よ',
        ra: 'ら',
        ri: 'り',
        ru: 'る',
        re: 'れ',
        ro: 'ろ',
        wa: 'わ',
        wi: 'ゐ',
        we: 'ゑ',
        wo: 'を',
        n: 'ん'
    },
    hiraganaS:  'ぁぃぅぇぉっゃゅょゎ',
    hiraganaSmall: {
        a: 'ぁ',
        i: 'ぃ',
        u: 'ぅ',
        e: 'ぇ',
        o: 'ぉ',
        tsu: 'っ',
        ya: 'ゃ',
        yu: 'ゅ',
        yo: 'ょ',
        wa: 'ゎ'
    },
    katakanaStr:    'アイウエオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヰヱヲン',
    katakana:   {
        a: 'ア',
        i: 'イ',
        u: 'ウ',
        e: 'エ',
        o: 'オ',
        ka: 'カ',
        ga: 'ガ',
        ki: 'キ',
        gi: 'ギ',
        ku: 'ク',
        gu: 'グ',
        ke: 'ケ',
        ge: 'ゲ',
        ko: 'コ',
        go: 'ゴ',
        sa: 'サ',
        za: 'ザ',
        si: 'シ',
        zi: 'ジ',
        su: 'ス',
        zu: 'ズ',
        se: 'セ',
        ze: 'ゼ',
        so: 'ソ',
        zo: 'ゾ',
        ta: 'タ',
        da: 'ダ',
        ti: 'チ',
        di: 'ヂ',
        tsu: 'ツ',
        du: 'ヅ',
        te: 'テ',
        de: 'デ',
        to: 'ト',
        do: 'ド',
        na: 'ナ',
        ni: 'ニ',
        nu: 'ヌ',
        ne: 'ネ',
        no: 'ノ',
        ha: 'ハ',
        ba: 'バ',
        pa: 'パ',
        hi: 'ヒ',
        bi: 'ビ',
        pi: 'ピ',
        hu: 'フ',
        bu: 'ブ',
        pu: 'プ',
        he: 'ヘ',
        be: 'ベ',
        pe: 'ペ',
        ho: 'ホ',
        bo: 'ボ',
        po: 'ポ',
        ma: 'マ',
        mi: 'ミ',
        mu: 'ム',
        me: 'メ',
        mo: 'モ',
        ya: 'ヤ',
        yu: 'ユ',
        yo: 'ヨ',
        ra: 'ラ',
        ri: 'リ',
        ru: 'ル',
        re: 'レ',
        ro: 'ロ',
        wa: 'ワ',
        wi: 'ヰ',
        we: 'ヱ',
        wo: 'ヲ',
        n: 'ン'
    },
    katakanaS:      'ァィゥェォッャュョヮ',
    katakanaSmall: {
        a: 'ァ',
        i: 'ィ',
        u: 'ゥ',
        e: 'ェ',
        o: 'ォ',
        tsu: 'ッ',
        ya: 'ャ',
        yu: 'ュ',
        yo: 'ョ',
        wa: 'ヮ'
    },
    voicedCombine:      '゙',
    semiVoicedCombine:  '゚',
    voiced:     '゛',
    semiVoiced: '゜',

    offset:     ( ch, n ) => String.fromCodePoint( ch.codePointAt( 0 ) + n ),
    coffset:    ( ch, n ) => String.fromCodePoint( ch.codePointAt( 0 ) + ( n.charCodeAt( 0 ) - 97 ) ),
    display

};

module.exports = chars;

function display()
{
        // console.log( 'small \u25cf black circle' );
        // console.log( 'something called ' + chars.spot + ' Z notation' );
        // console.log( 'dot ' + chars.sum + ' n' + chars.squared + ' + c' + chars.superscript.a + ' ' + chars.dot + ' / l' + chars.subscript.n );
        // console.log( 'small \u25cf black circle \u22a2 RULE \u21d2 PRODUCES THIS' );
        // console.log( chars.offset(chars.greek1L, 2 ) + ' \u25cf black circle \u22a6 RULE \u2248 PRODUCES THIS' );
        // console.log( '\u2200x \u21d2 \u2203y \u2208 x' );

    console.log( ` Mathematical Operators` );
    console.log( `${chars.bracketUL}  	        0	1	2	3	4	5	6	7	8	9	A	B	C	D	E	F ${chars.bracketUR}` );
    console.log( `${chars.bracketML} U+220x	∀	∁	∂	∃	∄	∅	∆	∇	∈	∉	∊	∋	∌	∍	∎	∏ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+221x	∐	∑	−	∓	∔	∕	∖	∗	∘	∙	√	∛	∜	∝	∞	∟ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+222x	∠	∡	∢	∣	∤	∥	∦	∧	∨	∩	∪	∫	∬	∭ 	 ∮      ∯ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+223x	∰       ∱       ∲       ∳       ∴       ∵       ∶       ∷       ∸       ∹       ∺       ∻       ∼       ∽       ∾       ∿ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+224x	≀	≁	≂	≃	≄	≅	≆	≇	≈	≉	≊	≋	≌	≍	≎	≏ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+225x	≐	≑	≒	≓	≔	≕	≖	≗	≘	≙	≚	≛	≜	≝	≞	≟ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+226x	≠	≡	≢	≣	≤	≥	≦	≧	≨	≩	≪	≫	≬	≭	≮	≯ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+227x	≰	≱	≲	≳	≴	≵	≶	≷	≸	≹	≺	≻	≼	≽	≾	≿ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+228x	⊀	⊁	⊂	⊃	⊄	⊅	⊆	⊇	⊈	⊉	⊊	⊋	⊌	⊍	⊎	⊏ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+229x	⊐	⊑	⊒	⊓	⊔	⊕	⊖	⊗	⊘	⊙	⊚	⊛	⊜	⊝	⊞	⊟ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+22Ax	⊠	⊡	⊢	⊣	⊤	⊥	⊦	⊧	⊨	⊩	⊪	⊫	⊬	⊭	⊮	⊯ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+22Bx	⊰	⊱	⊲	⊳	⊴	⊵	⊶	⊷	⊸	⊹	⊺	⊻	⊼	⊽	⊾	⊿ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+22Cx	⋀	⋁	⋂	⋃	⋄	⋅	⋆	⋇	⋈	⋉	⋊	⋋	⋌	⋍	⋎	⋏ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+22Dx	⋐	⋑	⋒	⋓	⋔	⋕	⋖	⋗	⋘	⋙       ⋚	⋛	⋜	⋝	⋞       ⋟ ${chars.bracketMR}` );
    console.log( `${chars.bracketML} U+22Ex	\u25cf	⋡	⋢	⋣	⋤	⋥	⋦	⋧	⋨	⋩	⋪	⋫	⋬	⋭	⋮	⋯ ${chars.bracketMR}` );
    console.log( `${chars.bracketLL} U+22Fx	⋰	⋱	⋲	⋳	⋴	⋵	⋶	⋷	⋸	⋹	⋺	⋻	⋼	⋽	⋾	⋿ ${chars.bracketLR}` );

    console.log( `Hiragana:\n    ${chars.hiraganaStr}` );
    console.log( `Katakana:\n    ${chars.katakanaStr}` );
    console.log( `Greek Uncials:\n    ${chars.greekU}` );
    console.log( `Greek Miniscule:\n    ${chars.greekL}` );

    console.log( `Greek Uncials (bold):\n    ${chars.greekBU}` );
    console.log( `Greek Miniscule (bold):\n    ${chars.greekBL}` );

    console.log( `Greek Uncials (italic):\n    ${chars.greekIU}` );
    console.log( `Greek Miniscule (italic):\n    ${chars.greekIL}` );

    console.log( `Italics Uppercase:\n    ${chars.italicU}` );
    console.log( `Italics Lowercase:\n    ${chars.italicL}` );

    console.log( `Italics Uppercase (bold):\n    ${chars.italicBU}` );
    console.log( `Italics Lowercase (bold):\n    ${chars.italicBL}` );

    console.log( `Runes:\n    ${chars.runes}` );
    console.log( `Futhark:\n    ${chars.futhark}` );
    console.log( `Planets:\n    ${Object.keys( chars.planets ).map( k => chars.planets[ k ] ).join( ' ' )}` );
    console.log( `Zodiac:\n    ${Object.keys( chars.zodiac ).map( k => chars.zodiac[ k ] ).join( ' ' )}` );
    console.log( `Cards (black):\n    ${Object.keys( chars.cards.black ).map( k => chars.cards.black[ k ] ).join( ' ' )}` );
    console.log( `Cards (white):\n    ${Object.keys( chars.cards.white ).map( k => chars.cards.white[ k ] ).join( ' ' )}` );
    console.log( `Chess (black):\n    ${Object.keys( chars.chess.black ).map( k => chars.chess.black[ k ] ).join( ' ' )}` );
    console.log( `Chess (white):\n    ${Object.keys( chars.chess.white ).map( k => chars.chess.white[ k ] ).join( ' ' )}` );
}
