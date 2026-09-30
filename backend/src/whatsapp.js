import makeWASocket, { useMultiFileAuthState } from '@whiskeysockets/baileys';
import QRCode from 'qrcode-terminal';

let sock = null;
let qrCodeTexto = null;

export function getQR(){ return qrCodeTexto; }
export function getStatus(){ return { conectado: !!sock, temQR: !!qrCodeTexto }; }
export function isConnected(){ return !!sock; }

export async function iniciarWhatsApp(){
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
  
  const makeSock = makeWASocket.default ? makeWASocket.default : makeWASocket;
  sock = makeSock({ 
    auth: state, 
    printQRInTerminal: false // desativa o aviso
  });

  sock.ev.on('creds.update', saveCreds);
  
  sock.ev.on('connection.update', async (u)=>{
    const { connection, qr } = u;
    
    if(qr){
      qrCodeTexto = qr;
      console.log('\n\n');
      console.log('================ QR CODE =================');
      QRCode.generate(qr, { small: true });
      console.log('==========================================');
      console.log('Escaneia com WhatsApp > Aparelhos conectados');
      console.log('\n\n');
    }
    
    if(connection === 'open'){ 
      console.log('✅✅✅ ZAP CONECTADO COM SUCESSO ✅✅✅'); 
      qrCodeTexto = null; 
    }
    
    if(connection === 'close'){ 
      sock = null; 
      console.log('Desconectado, tentando novamente em 3s...'); 
      setTimeout(()=> iniciarWhatsApp(), 3000);
    }
  });
}

export async function sendMessage(numero, mensagem){
  if(!sock) throw new Error('WhatsApp nao conectado - escaneie o QR primeiro');
  const jid = numero.includes('@s.whatsapp.net') ? numero : numero + '@s.whatsapp.net';
  return await sock.sendMessage(jid, { text: mensagem });
}

export const enviarMensagem = sendMessage;
export const startWhatsApp = iniciarWhatsApp;