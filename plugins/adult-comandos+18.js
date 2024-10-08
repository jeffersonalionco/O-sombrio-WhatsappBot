import axios from 'axios';
import fetch from 'node-fetch';
import fs from 'fs'

const handler = async (m, { command, conn }) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.adult_comandos
  

  // --------------------------------------------------------------------------------------------

    if(global.db.data.users[m.sender].license.status === false){
      const tradution = JSON.parse(fs.readFileSync(`./language/${idioma}.json`)).plugins.verificationLicense

  let license = global.db.data.users[m.sender].license
  let data = new Date().toLocaleDateString('pt-BR')

  let dataAtual = new Date();
dataAtual.setDate(dataAtual.getDate() + 1); // Adiciona um dia à data atual

let dataAmanha = dataAtual.toLocaleDateString('pt-BR');

  handleCommand(command)

  async function handleCommand(command) {
    
    // Verifica se o comando já existe em 'comandos'
    if (!license.comandosTmp[command]) {
      // Se o comando não existir, cria um novo objeto com informações padrão
      license.comandosTmp[command] = {
        tentativas: 0,
        MaxTentativas: 6,
        data: new Date().toLocaleDateString('pt-BR') // Data no formato dd/mm/aaaa
      };
      console.log(`Novo comando '${command}' criado.`);

    } else {
      console.log(`Comando '${command}' já existe.`);

      // Verificar se a data é do dia atual
      if (license.comandosTmp[command].data !== data) {
        license.comandosTmp[command].tentativas = 0
        license.comandosTmp[command].data = data
      }
      if (license.comandosTmp[command].tentativas > license.comandosTmp[command].MaxTentativas) {
        return `*Tentativa&* _${license.comandosTmp[command].MaxTentativas} de ${license.comandosTmp[command].MaxTentativas} no comando *${command}*_ \n\nCompre uma licença ou aguarde até amanha, para mais ${license.comandosTmp[command].MaxTentativas} tentativas! \n\n_Você precisa tem licença para acessar este comando_\n\nCompre a sua licença e tenha acessor total aos comandos do bot.

    *🏆 Acesse:* https://bit.ly/licenseSombrio 
    _Libere acesso a todos os comandos._`

      } else {
        license.comandosTmp[command].tentativas += 1
        m.reply(license.comandosTmp[command].tentativas)
      }
    }

    // Exibe o comando atual
    console.log(license.comandosTmp[command]);
  }


  if (license.comandosTmp[command].tentativas >= license.comandosTmp[command].MaxTentativas && license.comandosTmp[command].data === data) {

    if (m.isGroup) {
      return m.reply(tradution.texto2
        .replace('{{tentativas}}', license.comandosTmp[command].tentativas) 
        .replace('{{MaxTentativas}}', license.comandosTmp[command].MaxTentativas)
        .replace('{{command}}', command)
        .replace('{{data}}', data)
        .replace('{{dataAmanha}}', dataAmanha)
    );
    } else {
      return m.reply(tradution.texto3
        .replace('{{MaxTentativas}}', license.comandosTmp[command].MaxTentativas)
        .replace('{{command}}', command)
        .replace('{{tentativas}}', license.comandosTmp[command].tentativas )
    );
    }
  }
}



  // ----------------------------------------------------------------------------------------------
  /*if(global.db.data.users[m.sender].license.status !== true) return m.reply(`_Você precisa tem licença para acessar este comando_\n\nCompre a sua licença e tenha acessor total aos comandos do bot.
 
     *🏆 Acesse:* https://bit.ly/licenseSombrio 
     _Libere acesso a todos os comandos._`)*/


  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw tradutor.texto1;

  if (command == 'nsfwloli') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'nsfwfoot') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'nsfwass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'nsfwbdsm') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwbdsm.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'nsfwcum') {
    const res = `${global.MyApiRestBaseUrl}/api/nsfw/nsfwcum&apikey=${global.MyApiRestApikey}`;
    conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'nsfwero') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwero.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'nsfwfemdom') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfemdom.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'nsfwglass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwglass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'hentai') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/hentai.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'nsfworgy') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfworgy.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'tetas') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'booty') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'ecchi') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'furro') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'trapito') {
    const res = await fetch(`https://api.waifu.pics/nsfw/trap`);
    const json = await res.json();
    const url = json.url;
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'imagenlesbians') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'panties') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'pene') {
    const res = `${global.MyApiRestBaseUrl}/api/adult/pene?apikey=${global.MyApiRestApikey}`;
    conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'porno') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'randomxxx') {
    const rawjsonn = ['https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json'];
    const rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())];
    const res = (await axios.get(rawjson)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'pechos') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pechos.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'yaoi') {
    const res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`);
    const json = await res.json();
    const url = json.message;
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'yaoi2') {
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`);
    const json = await res.json();
    const url = json.link;
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'yuri') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }

  if (command == 'yuri2') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data;
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`);
    const json = await res.json();
    let url = json.link;
    if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m });
  }
};
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.tags = ['nsfw'];
export default handler;
