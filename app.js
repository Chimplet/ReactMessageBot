const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const command = require('./commandHandle');

var a0 = '🇦'; var a1 = '<:a1:772227014052413441>'; var a2 = '<:a2:772260197250498570>'; var a3 = '<:a3:772266535880228896>'; var a4 = '<:a4:772271724648857610>'; var a5 = '<:a5:772273128931983402>';
var b0 = '🇧'; var b1 = '<:b1:772227014425313280>'; var b2 = '<:b2:772260197246304337>'; var b3 = '<:b3:772266536076836914>'; var b4 = '<:b4:772271724657246258>'; var b5 = '<:b5:772273129325199371>';
var c0 = '🇨'; var c1 = '<:c1:772227014270386228>'; var c2 = '<:c2:772260196822810675>'; var c3 = '<:c3:772266536030568479>'; var c4 = '<:c4:772271724812828682>'; var c5 = '<:c5:772273129354952704>';
var d0 = '🇩'; var d1 = '<:d1:772227014379307028>'; var d2 = '<:d2:772260196944183317>'; var d3 = '<:d3:772266536123236352>'; var d4 = '<:d4:772271724631949313>'; var d5 = '<:d5:772273129342763018>';
var e0 = '🇪'; var e1 = '<:e1:772227014207602689>'; var e2 = '<:e2:772260197254692864>'; var e3 = '<:e3:772266536081424414>'; var e4 = '<:e4:772271724624478208>'; var e5 = '<:e5:772273129422192640>';
var f0 = '🇫'; var f1 = '<:f1:772227013955158038>'; var f2 = '<:f2:772260196922687489>'; var f3 = '<:f3:772266535854407693>'; var f4 = '<:f4:772271724657508352>'; var f5 = '<:f5:772273129346301962>';
var g0 = '🇬'; var g1 = '<:g1:772227014446415923>'; var g2 = '<:g2:772260197120344095>'; var g3 = '<:g3:772266536131362847>'; var g4 = '<:g4:772271724782682112>'; var g5 = '<:g5:772273129464004658>';
var h0 = '🇭'; var h1 = '<:h1:772227014593609758>'; var h2 = '<:h2:772260197237653524>'; var h3 = '<:h3:772266535867252757>'; var h4 = '<:h4:772271724741132288>'; var h5 = '<:h5:772273129513943101>';
var i0 = '🇮'; var i1 = '<:i1:772227014429245440>'; var i2 = '<:i2:772260197108154369>'; var i3 = '<:i3:772266536207122442>'; var i4 = '<:i4:772271724649250826>'; var i5 = '<:i5:772273129048768524>';
var j0 = '🇯'; var j1 = '<:j1:772227014051758081>'; var j2 = '<:j2:772260197255217162>'; var j3 = '<:j3:772266535661076481>'; var j4 = '<:j4:772271724740739142>'; var j5 = '<:j5:772273129341845505>';
var k0 = '🇰'; var k1 = '<:k1:772227014294765629>'; var k2 = '<:k2:772260197246173194>'; var k3 = '<:k3:772266535879835659>'; var k4 = '<:k4:772271724703252481>'; var k5 = '<:k5:772273129376186398>';
var l0 = '🇱'; var l1 = '<:l1:772227014148751391>'; var l2 = '<:l2:772260197292310578>'; var l3 = '<:l3:772266536072904734>'; var l4 = '<:l4:772271724690800650>'; var l5 = '<:l5:772273129350496276>';
var m0 = '🇲'; var m1 = '<:m1:772227014374588452>'; var m2 = '<:m2:772260197136596993>'; var m3 = '<:m3:772266535926497281>'; var m4 = '<:m4:772271724648464424>'; var m5 = '<:m5:772273129409347594>';
var n0 = '🇳'; var n1 = '<:n1:772227014148620299>'; var n2 = '<:n2:772260197325602826>'; var n3 = '<:n3:772266536094138368>'; var n4 = '<:n4:772271724657246259>'; var n5 = '<:n5:772273129354952734>';
var o0 = '🇴'; var o1 = '<:o1:772227014119522318>'; var o2 = '<:o2:772260197287723038>'; var o3 = '<:o3:772266536056258561>'; var o4 = '<:o4:772271724334415873>'; var o5 = '<:o5:772273129028190219>';
var p0 = '🇵'; var p1 = '<:p1:772227014279168082>'; var p2 = '<:p2:772260197309218856>'; var p3 = '<:p3:772266535816527883>'; var p4 = '<:p4:772271724657246268>'; var p5 = '<:p5:772273128981528578>';
var q0 = '🇶'; var q1 = '<:q1:772227014467911721>'; var q2 = '<:q2:772260197292310558>'; var q3 = '<:q3:772266535800012832>'; var q4 = '<:q4:772271724645187605>'; var q5 = '<:q5:772273129359278090>';
var r0 = '🇷'; var r1 = '<:r1:772227014479708190>'; var r2 = '<:r2:772260197325602906>'; var r3 = '<:r3:772266536131362817>'; var r4 = '<:r4:772271724410568715>'; var r5 = '<:r5:772273129174597643>';
var s0 = '🇸'; var s1 = '<:s1:772227014299222057>'; var s2 = '<:s2:772260197334908928>'; var s3 = '<:s3:772266536169242624>'; var s4 = '<:s4:772271724711641099>'; var s5 = '<:s5:772273129397551115>';
var t0 = '🇹'; var t1 = '<:t1:772227014576046080>'; var t2 = '<:t2:772260196986650665>'; var t3 = '<:t3:772266536122843166>'; var t4 = '<:t4:772271724666421258>'; var t5 = '<:t5:772273129429925928>';
var u0 = '🇺'; var u1 = '<:u1:772227014554812476>'; var u2 = '<:u2:772260197368332298>'; var u3 = '<:u3:772266536114061312>'; var u4 = '<:u4:772271724460245005>'; var u5 = '<:u5:772273129468854342>';
var v0 = '🇻'; var v1 = '<:v1:772227014618513438>'; var v2 = '<:v2:772260197288378428>'; var v3 = '<:v3:772266535891763201>'; var v4 = '<:v4:772271724750307348>'; var v5 = '<:v5:772273129258876939>';
var w0 = '🇼'; var w1 = '<:w1:772227014463455262>'; var w2 = '<:w2:772260197300174878>'; var w3 = '<:w3:772266535895957525>'; var w4 = '<:w4:772271724678086656>'; var w5 = '<:w5:772273129099100221>';
var x0 = '🇽'; var x1 = '<:x1:772227014634504202>'; var x2 = '<:x2:772260197044322336>'; var x3 = '<:x3:772266536122843206>'; var x4 = '<:x4:772271724397592577>'; var x5 = '<:x5:772273129489694760>';
var y0 = '🇾'; var y1 = '<:y1:772227014555729941>'; var y2 = '<:y2:772260197322326026>'; var y3 = '<:y3:772266536127168522>'; var y4 = '<:y4:772271724405850143>'; var y5 = '<:y5:772273129065676832>';
var z0 = '🇿'; var z1 = '<:z1:772227014517850164>'; var z2 = '<:z2:772260197380521984>'; var z3 = '<:z3:772266535796211723>'; var z4 = '<:z4:772271724653051944>'; var z5 = '<:z5:772273129429925938>';
var blank0 = '<:blank0:772264180568948736>'; var blank1 = '<:blank1:772264279897407508>'; var blank2 = '<:blank2:772264325154078730>'; var blank3 = '<:blank3:772264310542041110>'; var blank4 = '<:blank4:772264377155190784>'; var blank5 = '<:blank5:772264417000685579>';



client.on('ready', () => {
    
    console.log('loaded');
    client.user.setPresence({ activity: ( name: '!reactmessage'), status: 'online' })
    client.user.setActivity('!reactmessage', { type: 'PLAYING'} )
    command(client, 'reactmessage', message => {
        reactMsg = message.content.slice(13);
        charLenght = reactMsg.length;
        reactChars = reactMsg.split('');
        numVars = [
            'aNum',
            0,
            'bNum',
            0,
            'cNum',
            0,
            'dNum',
            0,
            'eNum',
            0,
            'fNum',
            0,
            'gNum',
            0,
            'hNum',
            0,
            'iNum',
            0,
            'jNum',
            0,
            'kNum',
            0,
            'lNum',
            0,
            'mNum',
            0,
            'nNum',
            0,
            'oNum',
            0,
            'pNum',
            0,
            'qNum',
            0,
            'rNum',
            0,
            'sNum',
            0,
            'tNum',
            0,
            'uNum',
            0,
            'vNum',
            0,
            'wNum',
            0,
            'xNum',
            0,
            'yNum',
            0,
            'zNum',
            0,
            ' Num',
            0,
        ]


        if (charLenght > 20) {
            const embed = new Discord.MessageEmbed
            embed.setTitle("Error");
            embed.setDescription("You have entered an invalid character, or exceeded the 20 reaction limit");
            embed.setFooter("ReactMessageBot")
            embed.setColor('FF0000')
            message.channel.send(embed);
        } else {
            for (var i = 1; i < charLenght; i++) {
                currentChar = reactChars[i] + "Num"
                console.log(currentChar);
                if (numVars.includes(currentChar) === true) {
                    charPos = numVars.indexOf(currentChar) + 1;
                    reactCharPos = numVars.indexOf(currentChar);
                    reactCharName = numVars[reactCharPos].slice(0, 1) + numVars[charPos];
                    console.log(reactCharName)
     
                    numVars[charPos]++; 
                    if (reactCharName === "a0" || "a1" || "a2" || "a3" || "a5" || "a5") {
                        if (reactCharName === "a0") {
                            message.react(a0)
                            console.log('worked')
                        } else if (reactCharName === "a1") {
                            message.react(a1)
                        }else if (reactCharName === "a2") {
                            message.react(a2)
                        }else if (reactCharName === "a3") {
                            message.react(a3)
                        }else if (reactCharName === "a4") {
                            message.react(a4)
                        }else if (reactCharName === "a5") {
                            message.react(a5)
                        }
                    }
                    if (reactCharName === "b0" || "b1" || "b2" || "b3" || "b4" || "b5") {
                        if (reactCharName === "b0") {
                            message.react(b0)
                        } else if (reactCharName === "b1") {
                            message.react(b1)
                        }else if (reactCharName === "b2") {
                            message.react(b2)
                        }else if (reactCharName === "b3") {
                            message.react(b3)
                        }else if (reactCharName === "b4") {
                            message.react(b4)
                        }else if (reactCharName === "b5") {
                            message.react(b5)
                        }
                    }
                    if (reactCharName === "c0" || "c1" || "c2" || "c3" || "c4" || "c5") {
                        if (reactCharName === "c0") {
                            message.react(c0)
                        } else if (reactCharName === "c1") {
                            message.react(c1)
                        }else if (reactCharName === "c2") {
                            message.react(c2)
                        }else if (reactCharName === "c3") {
                            message.react(c3)
                        }else if (reactCharName === "c4") {
                            message.react(c4)
                        }else if (reactCharName === "c5") {
                            message.react(c5)
                        }
                    }
                    if (reactCharName === "d0" || "d1" || "d2" || "d3" || "d4" || "d5") {
                        if (reactCharName === "d0") {
                            message.react(d0)
                        } else if (reactCharName === "d1") {
                            message.react(d1)
                        }else if (reactCharName === "d2") {
                            message.react(d2)
                        }else if (reactCharName === "d3") {
                            message.react(d3)
                        }else if (reactCharName === "d4") {
                            message.react(d4)
                        }else if (reactCharName === "d5") {
                            message.react(d5)
                        }
                    }
                    if (reactCharName === "e0" || "e1" || "e2" || "e3" || "e4" || "e5") {
                        if (reactCharName === "e0") {
                            message.react(e0)
                        } else if (reactCharName === "e1") {
                            message.react(e1)
                        }else if (reactCharName === "e2") {
                            message.react(e2)
                        }else if (reactCharName === "e3") {
                            message.react(e3)
                        }else if (reactCharName === "e4") {
                            message.react(e4)
                        }else if (reactCharName === "e5") {
                            message.react(e5)
                        }
                    }
                    if (reactCharName === "f0" || "f1" || "f2" || "f3" || "f4" || "f5") {
                        if (reactCharName === "f0") {
                            message.react(f0)
                        } else if (reactCharName === "f1") {
                            message.react(f1)
                        }else if (reactCharName === "f2") {
                            message.react(f2)
                        }else if (reactCharName === "f3") {
                            message.react(f3)
                        }else if (reactCharName === "f4") {
                            message.react(f4)
                        }else if (reactCharName === "f5") {
                            message.react(f5)
                        }
                    }
                    if (reactCharName === "g0" || "g1" || "g2" || "g3" || "g4" || "g5") {
                        if (reactCharName === "g0") {
                            message.react(g0)
                        } else if (reactCharName === "g1") {
                            message.react(g1)
                        }else if (reactCharName === "g2") {
                            message.react(g2)
                        }else if (reactCharName === "g3") {
                            message.react(g3)
                        }else if (reactCharName === "g4") {
                            message.react(g4)
                        }else if (reactCharName === "g5") {
                            message.react(g5)
                        }
                    }
                    if (reactCharName === "h0" || "h1" || "h2" || "h3" || "h4" || "h5") {
                        if (reactCharName === "h0") {
                            message.react(h0)
                        } else if (reactCharName === "h1") {
                            message.react(h1)
                        }else if (reactCharName === "h2") {
                            message.react(h2)
                        }else if (reactCharName === "h3") {
                            message.react(h3)
                        }else if (reactCharName === "h4") {
                            message.react(h4)
                        }else if (reactCharName === "h5") {
                            message.react(h5)
                        }
                    }
                    if (reactCharName === "i0" || "i1" || "i2" || "i3" || "i4" || "i5") {
                        if (reactCharName === "i0") {
                            message.react(i0)
                        } else if (reactCharName === "i1") {
                            message.react(i1)
                        }else if (reactCharName === "i2") {
                            message.react(i2)
                        }else if (reactCharName === "i3") {
                            message.react(i3)
                        }else if (reactCharName === "i4") {
                            message.react(i4)
                        }else if (reactCharName === "i5") {
                            message.react(i5)
                        }
                    }
                    if (reactCharName === "j0" || "j1" || "j2" || "j3" || "j4" || "j5") {
                        if (reactCharName === "j0") {
                            message.react(j0)
                        } else if (reactCharName === "j1") {
                            message.react(j1)
                        }else if (reactCharName === "j2") {
                            message.react(j2)
                        }else if (reactCharName === "j3") {
                            message.react(j3)
                        }else if (reactCharName === "j4") {
                            message.react(j4)
                        }else if (reactCharName === "j5") {
                            message.react(j5)
                        }
                    }
                    if (reactCharName === "k0" || "k1" || "k2" || "k3" || "k4" || "k5") {
                        if (reactCharName === "k0") {
                            message.react(k0)
                        } else if (reactCharName === "k1") {
                            message.react(k1)
                        }else if (reactCharName === "k2") {
                            message.react(k2)
                        }else if (reactCharName === "k3") {
                            message.react(k3)
                        }else if (reactCharName === "k4") {
                            message.react(k4)
                        }else if (reactCharName === "k5") {
                            message.react(k5)
                        }
                    }
                    if (reactCharName === "l0" || "l1" || "l2" || "l3" || "l4" || "l5") {
                        if (reactCharName === "l0") {
                            message.react(l0)
                        } else if (reactCharName === "l1") {
                            message.react(l1)
                        }else if (reactCharName === "l2") {
                            message.react(l2)
                        }else if (reactCharName === "l3") {
                            message.react(l3)
                        }else if (reactCharName === "l4") {
                            message.react(l4)
                        }else if (reactCharName === "l5") {
                            message.react(l5)
                        }
                    }
                    if (reactCharName === "m0" || "m1" || "m2" || "m3" || "m4" || "m5") {
                        if (reactCharName === "m0") {
                            message.react(m0)
                        } else if (reactCharName === "m1") {
                            message.react(m1)
                        }else if (reactCharName === "m2") {
                            message.react(m2)
                        }else if (reactCharName === "m3") {
                            message.react(m3)
                        }else if (reactCharName === "m4") {
                            message.react(m4)
                        }else if (reactCharName === "m5") {
                            message.react(m5)
                        }
                    }
                    if (reactCharName === "n0" || "n1" || "n2" || "n3" || "n4" || "n5") {
                        if (reactCharName === "n0") {
                            message.react(n0)
                        } else if (reactCharName === "n1") {
                            message.react(n1)
                        }else if (reactCharName === "n2") {
                            message.react(n2)
                        }else if (reactCharName === "n3") {
                            message.react(n3)
                        }else if (reactCharName === "n4") {
                            message.react(n4)
                        }else if (reactCharName === "n5") {
                            message.react(n5)
                        }
                    }
                    if (reactCharName === "o0" || "o1" || "o2" || "o3" || "o4" || "o5") {
                        if (reactCharName === "o0") {
                            message.react(o0)
                        } else if (reactCharName === "o1") {
                            message.react(o1)
                        }else if (reactCharName === "o2") {
                            message.react(o2)
                        }else if (reactCharName === "o3") {
                            message.react(o3)
                        }else if (reactCharName === "o4") {
                            message.react(o4)
                        }else if (reactCharName === "o5") {
                            message.react(o5)
                        }
                    }
                    if (reactCharName === "p0" || "p1" || "p2" || "p3" || "p4" || "p5") {
                        if (reactCharName === "p0") {
                            message.react(p0)
                        } else if (reactCharName === "p1") {
                            message.react(p1)
                        }else if (reactCharName === "p2") {
                            message.react(p2)
                        }else if (reactCharName === "p3") {
                            message.react(p3)
                        }else if (reactCharName === "p4") {
                            message.react(p4)
                        }else if (reactCharName === "p5") {
                            message.react(p5)
                        }
                    }
                    if (reactCharName === "q0" || "q1" || "q2" || "q3" || "q4" || "q5") {
                        if (reactCharName === "q0") {
                            message.react(q0)
                        } else if (reactCharName === "q1") {
                            message.react(q1)
                        }else if (reactCharName === "q2") {
                            message.react(q2)
                        }else if (reactCharName === "q3") {
                            message.react(q3)
                        }else if (reactCharName === "q4") {
                            message.react(q4)
                        }else if (reactCharName === "q5") {
                            message.react(q5)
                        }
                    }
                    if (reactCharName === "r0" || "r1" || "r2" || "r3" || "r4" || "r5") {
                        if (reactCharName === "r0") {
                            message.react(r0)
                        } else if (reactCharName === "r1") {
                            message.react(r1)
                        }else if (reactCharName === "r2") {
                            message.react(r2)
                        }else if (reactCharName === "r3") {
                            message.react(r4)
                        }else if (reactCharName === "r4") {
                            message.react(r4)
                        }else if (reactCharName === "r5") {
                            message.react(r5)
                        }
                    }
                    if (reactCharName === "s0" || "s1" || "s2" || "s3" || "s4" || "s5") {
                        if (reactCharName === "s0") {
                            message.react(s0)
                        } else if (reactCharName === "s1") {
                            message.react(s1)
                        }else if (reactCharName === "s2") {
                            message.react(s2)
                        }else if (reactCharName === "s3") {
                            message.react(s3)
                        }else if (reactCharName === "s4") {
                            message.react(s4)
                        }else if (reactCharName === "s5") {
                            message.react(s5)
                        }
                    }
                    if (reactCharName === "t0" || "t1" || "t2" || "t3" || "t4" || "t5") {
                        if (reactCharName === "t0") {
                            message.react(t0)
                        } else if (reactCharName === "t1") {
                            message.react(t1)
                        }else if (reactCharName === "t2") {
                            message.react(t2)
                        }else if (reactCharName === "t3") {
                            message.react(t3)
                        }else if (reactCharName === "t4") {
                            message.react(t4)
                        }else if (reactCharName === "t5") {
                            message.react(t5)
                        }
                    }
                    if (reactCharName === "u0" || "u1" || "u2" || "u3" || "u4" || "u5") {
                        if (reactCharName === "u0") {
                            message.react(u0)
                        } else if (reactCharName === "u1") {
                            message.react(u1)
                        }else if (reactCharName === "u2") {
                            message.react(u2)
                        }else if (reactCharName === "u3") {
                            message.react(u3)
                        }else if (reactCharName === "u4") {
                            message.react(u4)
                        }else if (reactCharName === "u5") {
                            message.react(u5)
                        }
                    }
                    if (reactCharName === "v0" || "v1" || "v2" || "v3" || "v4" || "v5") {
                        if (reactCharName === "v0") {
                            message.react(v0)
                        } else if (reactCharName === "v1") {
                            message.react(v1)
                        }else if (reactCharName === "v2") {
                            message.react(v2)
                        }else if (reactCharName === "v3") {
                            message.react(v3)
                        }else if (reactCharName === "v4") {
                            message.react(v4)
                        }else if (reactCharName === "v5") {
                            message.react(v5)
                        }
                    }
                    if (reactCharName === "w0" || "w1" || "w2" || "w3" || "w4" || "w5") {
                        if (reactCharName === "w0") {
                            message.react(w0)
                        } else if (reactCharName === "w1") {
                            message.react(w1)
                        }else if (reactCharName === "w2") {
                            message.react(w2)
                        }else if (reactCharName === "w3") {
                            message.react(w3)
                        }else if (reactCharName === "w4") {
                            message.react(w4)
                        }else if (reactCharName === "w5") {
                            message.react(w5)
                        }
                    }
                    if (reactCharName === "x0" || "x1" || "x2" || "x3" || "x4" || "x5") {
                        if (reactCharName === "x0") {
                            message.react(x0)
                        } else if (reactCharName === "x1") {
                            message.react(x1)
                        }else if (reactCharName === "x2") {
                            message.react(x2)
                        }else if (reactCharName === "x3") {
                            message.react(x3)
                        }else if (reactCharName === "x4") {
                            message.react(x4)
                        }else if (reactCharName === "x5") {
                            message.react(x5)
                        }
                    }
                    if (reactCharName === "y0" || "y1" || "y2" || "y3" || "y4" || "y5") {
                        if (reactCharName === "y0") {
                            message.react(y0)
                        } else if (reactCharName === "y1") {
                            message.react(y1)
                        }else if (reactCharName === "y2") {
                            message.react(y2)
                        }else if (reactCharName === "y3") {
                            message.react(y3)
                        }else if (reactCharName === "y4") {
                            message.react(y4)
                        }else if (reactCharName === "y5") {
                            message.react(y5)
                        }
                    }
                    if (reactCharName === "z0" || "z1" || "z2" || "z3" || "z4" || "z5") {
                        if (reactCharName === "z0") {
                            message.react(z0)
                        } else if (reactCharName === "z1") {
                            message.react(z1)
                        }else if (reactCharName === "z2") {
                            message.react(z2)
                        }else if (reactCharName === "z3") {
                            message.react(z3)
                        }else if (reactCharName === "z4") {
                            message.react(z4)
                        }else if (reactCharName === "z5") {
                            message.react(z5)
                        }
                    }
                    if (reactCharName === " 0" || " 1" || " 2" || " 3" || " 4" || " 5") {
                        if (reactCharName === " 0") {
                            message.react(blank0)
                        } else if (reactCharName === " 1") {
                            message.react(blank1)
                        }else if (reactCharName === " 2") {
                            message.react(blank2)
                        }else if (reactCharName === " 3") {
                            message.react(blank3)
                        }else if (reactCharName === " 4") {
                            message.react(blank4)
                        }else if (reactCharName === " 5") {
                            message.react(blank5)
                        }
                    } 
                }
            }
        }


    });
});


client.login(process.env.TOKEN);
