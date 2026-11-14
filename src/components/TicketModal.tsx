import React, { useEffect, useState } from 'react';
import { X, Check, Copy, CheckCheck, MessageCircle, ArrowUpRight, Handshake, ShieldCheck } from 'lucide-react';
import { SponsorTier } from '../types';

interface TicketModalProps { isOpen: boolean; onClose: () => void; }
const sponsorTiers: SponsorTier[] = [
 { tier:'BRONZE', pct:'10%', amount:'Rp 50.010.700', perks:['Logo ukuran kecil di media cetak & digital','Logo ukuran kecil di kaos panitia Drama Arena','Logo ukuran kecil di salah satu souvenir pilihan','Sertifikat kemitraan resmi & piagam apresiasi'] },
 { tier:'SILVER', pct:'30%', amount:'Rp 150.032.100', perks:['Logo ukuran sedang di seluruh media cetak','Logo di gantungan kunci dan event gate (gapura)','Logo ukuran sedang di kaos, jaket, & videotron','VIP Seat saat malam puncak pementasan'] },
 { tier:'GOLD', pct:'50%', amount:'Rp 250.053.500', popular:true, badge:'UTAMA / EKSKLUSIF', perks:['Logo ukuran besar di seluruh media publikasi','Logo di merchandise (gantungan kunci, kaos, topi, jaket)','Tayangan video iklan profil perusahaan sebelum acara','Eksposur status medsos setiap hari & booth eksklusif'] },
 { tier:'SPONSOR PRIBADI', pct:'Sukarela', amount:'Nominal Bebas & Ikhlas', perks:['Dana bantuan sukarela lillahi ta’ala','Dukungan sarana maupun dana tanpa batasan','Doa bersama dari ribuan santri & asatidz PMDG','Laporan pertanggungjawaban kegiatan resmi'] }
];
const bankAcc='0070-01-000315-56-7';
const contactNumber='6281398507876';

export const TicketModal: React.FC<TicketModalProps> = ({isOpen,onClose}) => {
 const [selectedTier,setSelectedTier]=useState('GOLD');
 const [copied,setCopied]=useState(false);
 useEffect(()=>{
  if(!isOpen)return;
  const previous=document.body.style.overflow;
  document.body.style.overflow='hidden';
  const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')onClose();};
  window.addEventListener('keydown',onKey);
  return ()=>{document.body.style.overflow=previous;window.removeEventListener('keydown',onKey);};
 },[isOpen,onClose]);
 if(!isOpen)return null;
 const copyBank=async()=>{try{await navigator.clipboard.writeText(bankAcc.replace(/-/g,''));setCopied(true);window.setTimeout(()=>setCopied(false),2200);}catch{setCopied(false);}};
 const contact=(tier=selectedTier)=>{
  const message=encodeURIComponent(`Assalamu'alaikum Panitia Drama Arena 5102, saya berminat menjalin kemitraan paket ${tier}. Mohon informasi tindak lanjut kerja sama.`);
  window.open(`https://wa.me/${contactNumber}?text=${message}`,'_blank','noopener,noreferrer');
 };
 const selected=sponsorTiers.find(t=>t.tier===selectedTier)||sponsorTiers[2];
 return <div className="da-sponsor-overlay" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}>
  <section className="da-sponsor-modal" role="dialog" aria-modal="true" aria-labelledby="da-sponsor-title">
   <button type="button" className="da-sponsor-close" onClick={onClose} aria-label="Tutup proposal"><X size={19}/></button>
   <div className="da-sponsor-topline"><span>DRAMA ARENA 5102</span><span>PARTNERSHIP DOSSIER / 01</span></div>
   <header className="da-sponsor-heading">
    <div className="da-sponsor-seal"><Handshake size={24}/></div>
    <span className="da-sponsor-eyebrow">KEMITRAAN & SPONSORSHIP RESMI</span>
    <h2 id="da-sponsor-title">Menjadi bagian<br/><em>dari sebuah panggung.</em></h2>
    <p>Ruang kolaborasi untuk mendukung perhelatan seni akbar siswa kelas 5 KMI Pondok Modern Darussalam Gontor.</p>
    <div className="da-sponsor-budget"><span>RENCANA ANGGARAN PENYELENGGARAAN</span><strong>Rp 500.107.000</strong></div>
   </header>
   <div className="da-sponsor-section-head"><div><span>01 / PILIH BENTUK KEMITRAAN</span><h3>Partnership opportunities</h3></div><p>Pilih paket untuk melihat rincian kontribusi dan bentuk apresiasi yang tercantum.</p></div>
   <div className="da-sponsor-tier-grid">{sponsorTiers.map((tier,i)=>{
    const active=selectedTier===tier.tier;
    return <button type="button" key={tier.tier} aria-pressed={active} onClick={()=>setSelectedTier(tier.tier)} className={`da-sponsor-tier ${tier.popular?'is-featured':''} ${active?'is-selected':''}`}>
     <span className="da-sponsor-tier-index">0{i+1}</span>{tier.badge&&<span className="da-sponsor-tier-badge">{tier.badge}</span>}
     <span className="da-sponsor-tier-name">{tier.tier}</span><strong className="da-sponsor-tier-pct">{tier.pct}</strong>
     <span className="da-sponsor-tier-amount">{tier.amount}</span><span className="da-sponsor-tier-select">{active?'PAKET DIPILIH':'PILIH PAKET'} <ArrowUpRight size={13}/></span>
    </button>;
   })}</div>
   <div className="da-sponsor-detail">
    <div className="da-sponsor-detail-head"><div><span>RINCIAN PAKET TERPILIH</span><h3>{selected.tier}</h3></div><strong>{selected.amount}</strong></div>
    <ul>{selected.perks?.map(perk=><li key={perk}><Check size={15}/><span>{perk}</span></li>)}</ul>
    <button type="button" className="da-sponsor-contact" onClick={()=>contact(selected.tier)}><MessageCircle size={17}/> Diskusikan paket ini melalui WhatsApp <ArrowUpRight size={16}/></button>
   </div>
   <div className="da-sponsor-bank"><div className="da-sponsor-bank-copy"><span>02 / REKENING RESMI SPONSORSHIP</span><h3>Bank BRI</h3><strong>{bankAcc}</strong><p>a.n. <b>Panitia Drama Arena 5102 PMDG</b><br/>Kampus Pusat Ponorogo, Jawa Timur 63472</p></div>
    <button type="button" className="da-sponsor-copy" onClick={copyBank}>{copied?<CheckCheck size={15}/>:<Copy size={15}/>} {copied?'TERSALIN':'SALIN NOMOR'}</button>
   </div>
   <footer className="da-sponsor-footer"><div><ShieldCheck size={16}/><span>Konfirmasi dan informasi kerja sama melalui panitia resmi.</span></div><button type="button" onClick={()=>contact('Sponsorship')}><MessageCircle size={15}/> Hubungi panitia</button></footer>
  </section>
 </div>;
};
export default TicketModal;
