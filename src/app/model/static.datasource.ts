import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(
      1,
      'หนังสือ เมื่อแมวที่บ้านคุณผันตัวเองมาเป็นไลฟ์โค้ช',
      '0',
      '00',
      `นึกถึงตัวเองเป็นอันดับแรกไม่เคยเปรียบเทียบตัวเองกับใครไม่มานั่งกังวลเรื่องอดีต
      หรืออนาคตไม่ปล่อยให้เรื่องแย่ ๆ มาทำลายวันดี ๆใช้ชีวิตง่าย ๆ สบาย ๆ 
      แบบนี้เห็นจะมีแต่แมวเท่านั้น!พบกับ 40 คำแนะนำที่จะทำให้ชีวิตคุณเบาสบายขึ้นในทุก ๆ
      ด้านจากไลฟ์โค้ชขนฟูที่อยู่เคียงข้างคุณมาตลอด`,
      [
        'https://pim-cdn0.ofm.co.th/products/large/DA04442.jpg',
        'https://pim-cdn0.ofm.co.th/products/large/DA04442_X2.jpg',
      ],
      175,
      10
    ),
    new Product(
      1,
      'หนังสือ โชคดีที่มึงได้อ่าน',
      '0',
      '00',
      `โชคดีที่มึงได้อ่าน จากที่สุดของ Content Online แห่งยุค เรื่องราวที่มีคุณค่า 
      จากรายการ อย่าหาว่าน้าสอน ในช่อง NANAKE 555 ที่ได้รับความนิยมอย่างล้นหลาม 
      ถูกร้อยเรียงเป็นตัวอักษรบรรจุอยู่ในหนังสือเล่มนี้ ให้ทุกคนได้เป็นเจ้าของ หยิบอ่านได้ทุกเมื่อที่ต้องการ`,
      [
        'https://pim-cdn0.ofm.co.th/products/large/D096012.jpg',
        'https://pim-cdn0.ofm.co.th/products/large/D096012_X2.jpg',
      ],
      269,
      15
    ),
    new Product(
      1,
      'หนังสือ จิตวิทยาสายดาร์ก',
      '0',
      '00',
      `"Dr. Hiro" เคยเป็นนักขายที่ล้มเหลว ขายอะไรก็ไม่มีใครซื้อ แต่แล้ววันหนึ่งขณะกำลังดูข่าว เขาก็นึกขึ้นได้ว่า 
      "ในโลกเรามีลัทธิที่ขายของไม่น่าเชื่อถือได้ในราคาแพงลิ่ว  แถมยังทำให้สาวกยอมทุ่มบริจาคทรัพย์สินจนหมดตัว  แล้วทำไมผมถึงขายไม่ออกล่ะ?" 
      เขาจึงเริ่มศึกษาเทคนิคเหล่านั้นอย่างจริงจัง อ่านหนังสือทุกเล่มเกี่ยวกับการล้างสมองที่มีในท้องตลาด 
      แล้วเอาไปปรับใช้จนกลายเป็นนักขายระดับท็อปของญี่ปุ่น นั่นคือที่มาของ "จิตวิทยาสายดาร์ก" 
      พบกับเทคนิคทางจิตวิทยา ที่ช่วยให้คุณใช้คำพูดควบคุมจิตใจคน ทำให้พวกเขาคล้อยตามและทำอย่างที่คุณต้องการโดยไม่รู้ตัว...`,
      [
        'https://pim-cdn0.ofm.co.th/products/large/DA04715.jpg',
        'https://pim-cdn0.ofm.co.th/products/large/DA04715_X2.jpg',
      ],
      250,
      25
    ),
    new Product(
      1,
      'หนังสือการ์ตูน มนตร์รัก Youtuber (เล่มเดียวจบ)',
      '0',
      '02',
      `เรื่องราวเลิฟคอเมดี้สุดอลหม่านของยูทูปเบอร์สุดป่วน

      มินะเป็นยูทูเบอร์สายความสวยความงาม
      ส่วนยูโกะเป็นยูทูเบอร์สายเกม
      วันหนึ่งมินะได้ค้นพบความหล่อเหลาของยูโกะที่ถูกซุกซ่อนเอาไว้
      เธอจึงขอให้เขามาร่วมคลิปวิดีโอในช่องความสวยความงามของตัวเอง
      แต่ทันทีที่ทำอย่างนั้น เธอก็เริ่มสนใจในตัวยูโกะขึ้นมาจริงซะแล้ว...!?`,
      [
        'https://pim-cdn0.ofm.co.th/products/large/D092251.jpg',
        'https://pim-cdn0.ofm.co.th/products/large/D092251_X2.jpg',
      ],
      49,
      40
    ),
    new Product(
      1,
      'หนังสือ ห้ามจูบจริงๆ เหรอครับ!? (เล่มเดียวจบ)',
      '0',
      '02',
      `เการ์ตูน ห้ามจูบจริงๆ เหรอครับ!?
      ทั้งที่ชมรมห้ามมีความรักแต่ฉันก็ยังคบกับรุ่นน้องแบบลับๆ! 
      เล่นสอนเป่าฟลุตได้ซาดิสม์เกินไปแล้ว อายจนไม่รู้จะทำยังไง 
      จะทนไม่ไหวแล้ว!!`,
      ['https://pim-cdn0.ofm.co.th/products/large/D092251.jpg'],
      49,
      23
    ),
    new Product(
      1,
      'หนังสือ หนุ่มหล่อเฟี้ยวขอป่วนหัวใจ (เล่มเดียวจบ)',
      '0',
      '02',
      `การ์ตูน หนุ่มหล่อเฟี้ยวขอป่วนหัวใจ
      การปลดเปลื้องบรรเทาทุกข์ (?) ของเหล่าหญิงสาวโดยเจ้าชายกำลังจะเริ่มต้นขึ้นแล้ว! 
      ว่ากันว่าที่บริษัทมีลูกชายท่านประธานคอยช่วยเหลือเยียวยาจิตใจของพนักงานสาวโดยไม่รู้ตัวอยู่ 
      จูเนียร์นั้นหล่อทั้งกายและใจ ดูเหมือนเมื่อได้เข้าไปเกี่ยวข้องกับเขาชีวิตของคนคนนั้นก็จะเปลี่ยนแปลงไป...!? 
      เชิญพบกับชายหนุ่มผู้เปล่งประกาย ? เหล่าหญิงสาวอาการหนักในผลงานรวมเรื่องสั้นรสชาติจัดจ้าน นำเสนอโดยฮายาคาวะ 
      โทโมโกะได้เลย!`,
      [
        'https://pim-cdn0.ofm.co.th/products/large/D095050.jpg'
      ],
      49,
      42
    ),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}