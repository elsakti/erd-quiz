const questions = [
    {
        id: 1,
        type: "IDENTIFICATION",
        question: {
            english: "What does UX stand for in web design?",
            thai: "UX ในการออกแบบเว็บหมายถึงอะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "User Experience",
                    thai: "ประสบการณ์ผู้ใช้"
                }
            },
            {
                id: 'b', 
                text: {
                    english: "User Extension",
                    thai: "การขยายผู้ใช้"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Universal eXchange",
                    thai: "การแลกเปลี่ยนสากล"
                }
            },
            {
                id: 'd',
                text: {
                    english: "User eXploration",
                    thai: "การสำรวจผู้ใช้"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "UX stands for User Experience, which focuses on how users interact with and experience a product or service.",
            thai: "UX ย่อมาจาก User Experience หรือประสบการณ์ผู้ใช้ ซึ่งมุ่งเน้นไปที่วิธีที่ผู้ใช้โต้ตอบและมีประสบการณ์กับผลิตภัณฑ์หรือบริการ"
        }
    },
    {
        id: 2,
        type: "IDENTIFICATION",
        question: {
            english: "What does UI stand for in design?",
            thai: "UI ในการออกแบบหมายถึงอะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "User Interface",
                    thai: "อินเตอร์เฟซผู้ใช้"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Universal Integration",
                    thai: "การรวมสากล"
                }
            },
            {
                id: 'c',
                text: {
                    english: "User Intelligence",
                    thai: "ปัญญาผู้ใช้"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Unified Information",
                    thai: "ข้อมูลรวม"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "UI stands for User Interface, which refers to the visual elements and interactive components that users see and interact with.",
            thai: "UI ย่อมาจาก User Interface หรืออินเตอร์เฟซผู้ใช้ ซึ่งหมายถึงองค์ประกอบทางภาพและส่วนประกอบการโต้ตอบที่ผู้ใช้เห็นและโต้ตอบด้วย"
        }
    },
    {
        id: 3,
        type: "IDENTIFICATION",
        question: {
            english: "Which color is commonly used to indicate danger or error?",
            thai: "สีใดที่มักใช้เพื่อระบุอันตรายหรือข้อผิดพลาด"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Green",
                    thai: "เขียว"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Red",
                    thai: "แดง"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Blue",
                    thai: "น้ำเงิน"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Yellow",
                    thai: "เหลือง"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Red is universally recognized as a color that indicates danger, error, or warning in user interfaces.",
            thai: "สีแดงเป็นที่ยอมรับกันทั่วไปว่าเป็นสีที่บ่งบอกถึงอันตราย ข้อผิดพลาด หรือคำเตือนในอินเตอร์เฟซผู้ใช้"
        }
    },
    {
        id: 4,
        type: "IDENTIFICATION",
        question: {
            english: "What is a wireframe in UI/UX design?",
            thai: "Wireframe ในการออกแบบ UI/UX คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "A low-fidelity blueprint of a page layout",
                    thai: "พิมพ์เขียวความละเอียดต่ำของการจัดวางหน้า"
                }
            },
            {
                id: 'b',
                text: {
                    english: "A high-resolution final design",
                    thai: "การออกแบบสุดท้ายความละเอียดสูง"
                }
            },
            {
                id: 'c',
                text: {
                    english: "A color palette selection",
                    thai: "การเลือกชุดสี"
                }
            },
            {
                id: 'd',
                text: {
                    english: "A user testing method",
                    thai: "วิธีการทดสอบผู้ใช้"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "A wireframe is a low-fidelity, basic visual guide that represents the skeletal framework of a webpage or application.",
            thai: "Wireframe เป็นคู่มือภาพความละเอียดต่ำและพื้นฐานที่แสดงโครงสร้างหลักของเว็บเพจหรือแอปพลิเคชัน"
        }
    },
    {
        id: 5,
        type: "IDENTIFICATION",
        question: {
            english: "What does 'responsive design' mean?",
            thai: "'Responsive design' หมายความว่าอย่างไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Design that loads quickly",
                    thai: "การออกแบบที่โหลดเร็ว"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Design that adapts to different screen sizes",
                    thai: "การออกแบบที่ปรับให้เข้ากับขนาดหน้าจอต่างๆ"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Design with many colors",
                    thai: "การออกแบบที่มีสีหลากหลาย"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Design with sound effects",
                    thai: "การออกแบบที่มีเสียงประกอบ"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Responsive design means creating layouts that adapt and work well on different screen sizes and devices.",
            thai: "Responsive design หมายถึงการสร้างเลย์เอาท์ที่ปรับตัวและทำงานได้ดีบนหน้าจอขนาดต่างๆ และอุปกรณ์ต่างๆ"
        }
    },
    {
        id: 6,
        type: "IDENTIFICATION",
        question: {
            english: "What is the main purpose of a prototype?",
            thai: "วัตถุประสงค์หลักของ prototype คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "To test ideas before full development",
                    thai: "เพื่อทดสอบไอเดียก่อนพัฒนาเต็มรูปแบบ"
                }
            },
            {
                id: 'b',
                text: {
                    english: "To replace final product",
                    thai: "เพื่อแทนที่ผลิตภัณฑ์สุดท้าย"
                }
            },
            {
                id: 'c',
                text: {
                    english: "To impress clients only",
                    thai: "เพื่อสร้างความประทับใจให้ลูกค้าเท่านั้น"
                }
            },
            {
                id: 'd',
                text: {
                    english: "To waste time",
                    thai: "เพื่อเสียเวลา"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "A prototype is used to test and validate design ideas, functionality, and user interactions before investing in full development.",
            thai: "Prototype ใช้เพื่อทดสอบและตรวจสอบไอเดียการออกแบบ ฟังก์ชันการทำงาน และการโต้ตอบของผู้ใช้ก่อนลงทุนในการพัฒนาเต็มรูปแบบ"
        }
    },
    {
        id: 7,
        type: "IDENTIFICATION",
        question: {
            english: "What is the recommended minimum touch target size for mobile?",
            thai: "ขนาดเป้าหมายสัมผัสขั้นต่ำที่แนะนำสำหรับมือถือคือเท่าไหร่"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "24px × 24px",
                    thai: "24px × 24px"
                }
            },
            {
                id: 'b',
                text: {
                    english: "44px × 44px",
                    thai: "44px × 44px"
                }
            },
            {
                id: 'c',
                text: {
                    english: "16px × 16px",
                    thai: "16px × 16px"
                }
            },
            {
                id: 'd',
                text: {
                    english: "64px × 64px",
                    thai: "64px × 64px"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "The minimum recommended touch target size for mobile interfaces is 44px × 44px to ensure easy finger tapping.",
            thai: "ขนาดเป้าหมายสัมผัสขั้นต่ำที่แนะนำสำหรับอินเตอร์เฟซมือถือคือ 44px × 44px เพื่อให้แน่ใจว่าแตะด้วยนิ้วได้ง่าย"
        }
    },
    {
        id: 8,
        type: "IDENTIFICATION",
        question: {
            english: "What does 'visual hierarchy' mean in design?",
            thai: "'Visual hierarchy' ในการออกแบบหมายความว่าอย่างไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Arranging elements by importance",
                    thai: "การจัดเรียงองค์ประกอบตามความสำคัญ"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Using only one color",
                    thai: "การใช้เพียงหนึ่งสี"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Making everything the same size",
                    thai: "การทำให้ทุกอย่างมีขนาดเท่ากัน"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Hiding elements",
                    thai: "การซ่อนองค์ประกอบ"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Visual hierarchy is the arrangement of elements in order of importance to guide the user's eye through the content.",
            thai: "Visual hierarchy คือการจัดเรียงองค์ประกอบตามลำดับความสำคัญเพื่อนำทางสายตาของผู้ใช้ผ่านเนื้อหา"
        }
    },
    {
        id: 9,
        type: "IDENTIFICATION",
        question: {
            english: "What is a 'call-to-action' (CTA) button?",
            thai: "ปุ่ม 'call-to-action' (CTA) คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "A button that prompts user action",
                    thai: "ปุ่มที่กระตุ้นให้ผู้ใช้ทำการกระทำ"
                }
            },
            {
                id: 'b',
                text: {
                    english: "A decorative button",
                    thai: "ปุ่มตกแต่ง"
                }
            },
            {
                id: 'c',
                text: {
                    english: "A broken button",
                    thai: "ปุ่มที่เสีย"
                }
            },
            {
                id: 'd',
                text: {
                    english: "A hidden button",
                    thai: "ปุ่มที่ซ่อน"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "A call-to-action (CTA) button is designed to prompt immediate response or encourage an immediate sale or action from users.",
            thai: "ปุ่ม call-to-action (CTA) ออกแบบมาเพื่อกระตุ้นการตอบสนองทันทีหรือส่งเสริมให้เกิดการขายหรือการกระทำทันทีจากผู้ใช้"
        }
    },
    {
        id: 10,
        type: "IDENTIFICATION",
        question: {
            english: "What is 'white space' in design?",
            thai: "'White space' ในการออกแบบคืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Empty space between elements",
                    thai: "พื้นที่ว่างระหว่างองค์ประกอบ"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Only white colored areas",
                    thai: "เฉพาะพื้นที่สีขาวเท่านั้น"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wasted space",
                    thai: "พื้นที่ที่เสียไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Text areas only",
                    thai: "เฉพาะพื้นที่ข้อความ"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "White space (or negative space) is the empty area between design elements that helps create visual breathing room and improves readability.",
            thai: "White space (หรือ negative space) คือพื้นที่ว่างระหว่างองค์ประกอบการออกแบบที่ช่วยสร้างพื้นที่หายใจทางสายตาและปรับปรุงความสามารถในการอ่าน"
        }
    },
    {
        id: 11,
        type: "IDENTIFICATION",
        question: {
            english: "What is the 'F-pattern' in web design?",
            thai: "'F-pattern' ในการออกแบบเว็บคืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "How users typically scan web content",
                    thai: "วิธีที่ผู้ใช้มักจะสแกนเนื้อหาเว็บ"
                }
            },
            {
                id: 'b',
                text: {
                    english: "A type of font",
                    thai: "ประเภทของฟอนต์"
                }
            },
            {
                id: 'c',
                text: {
                    english: "A color scheme",
                    thai: "โครงร่างสี"
                }
            },
            {
                id: 'd',
                text: {
                    english: "A layout grid",
                    thai: "กริดการจัดวาง"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "The F-pattern describes how users typically read web content - scanning horizontally at the top, then down the left side, creating an F-shaped pattern.",
            thai: "F-pattern อธิบายว่าผู้ใช้มักจะอ่านเนื้อหาเว็บอย่างไร - สแกนในแนวนอนที่ด้านบน จากนั้นลงด้านซ้าย สร้างรูปแบบคล้ายตัว F"
        }
    },
    {
        id: 12,
        type: "IDENTIFICATION",
        question: {
            english: "What does 'accessibility' mean in UI/UX?",
            thai: "'Accessibility' ใน UI/UX หมายความว่าอย่างไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Making interfaces usable for everyone",
                    thai: "ทำให้อินเตอร์เฟซใช้งานได้สำหรับทุกคน"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Making websites load faster",
                    thai: "ทำให้เว็บไซต์โหลดเร็วขึ้น"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Making designs colorful",
                    thai: "ทำให้การออกแบบมีสีสัน"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Making content shorter",
                    thai: "ทำให้เนื้อหาสั้นลง"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Accessibility means designing interfaces that can be used by people with disabilities and ensuring equal access for all users.",
            thai: "Accessibility หมายถึงการออกแบบอินเตอร์เฟซที่คนพิการสามารถใช้ได้และให้แน่ใจว่าผู้ใช้ทุกคนมีการเข้าถึงที่เท่าเทียมกัน"
        }
    },
    {
        id: 13,
        type: "IDENTIFICATION",
        question: {
            english: "What is a 'user persona' in UX design?",
            thai: "'User persona' ในการออกแบบ UX คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "A fictional character representing target users",
                    thai: "ตัวละครสมมติที่แทนผู้ใช้กลุ่มเป้าหมาย"
                }
            },
            {
                id: 'b',
                text: {
                    english: "A type of button design",
                    thai: "ประเภทของการออกแบบปุ่ม"
                }
            },
            {
                id: 'c',
                text: {
                    english: "A color palette",
                    thai: "ชุดสี"
                }
            },
            {
                id: 'd',
                text: {
                    english: "A testing method",
                    thai: "วิธีการทดสอบ"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "A user persona is a fictional character created to represent different user types and their needs, goals, and behaviors.",
            thai: "User persona คือตัวละครสมมติที่สร้างขึ้นเพื่อแทนผู้ใช้ประเภทต่างๆ และความต้องการ เป้าหมาย และพฤติกรรมของพวกเขา"
        }
    },
    {
        id: 14,
        type: "IDENTIFICATION",
        question: {
            english: "What is the purpose of A/B testing in UX?",
            thai: "วัตถุประสงค์ของการทดสอบ A/B ใน UX คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "To compare two versions and see which performs better",
                    thai: "เพื่อเปรียบเทียบสองเวอร์ชันและดูว่าอันไหนทำงานได้ดีกว่า"
                }
            },
            {
                id: 'b',
                text: {
                    english: "To test alphabet knowledge",
                    thai: "เพื่อทดสอบความรู้ตัวอักษร"
                }
            },
            {
                id: 'c',
                text: {
                    english: "To test audio quality",
                    thai: "เพื่อทดสอบคุณภาพเสียง"
                }
            },
            {
                id: 'd',
                text: {
                    english: "To test loading speed",
                    thai: "เพื่อทดสอบความเร็วในการโหลด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "A/B testing involves comparing two versions of a design element to determine which one performs better with users.",
            thai: "การทดสอบ A/B เกี่ยวข้องกับการเปรียบเทียบองค์ประกอบการออกแบบสองเวอร์ชันเพื่อพิจารณาว่าอันไหนทำงานได้ดีกว่ากับผู้ใช้"
        }
    },
    {
        id: 15,
        type: "IDENTIFICATION",
        question: {
            english: "What is the main goal of user research?",
            thai: "เป้าหมายหลักของการวิจัยผู้ใช้คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "To understand user needs and behaviors",
                    thai: "เพื่อเข้าใจความต้องการและพฤติกรรมของผู้ใช้"
                }
            },
            {
                id: 'b',
                text: {
                    english: "To increase website traffic",
                    thai: "เพื่อเพิ่มการเข้าชมเว็บไซต์"
                }
            },
            {
                id: 'c',
                text: {
                    english: "To reduce development costs",
                    thai: "เพื่อลดต้นทุนการพัฒนา"
                }
            },
            {
                id: 'd',
                text: {
                    english: "To impress stakeholders",
                    thai: "เพื่อสร้างความประทับใจให้ผู้มีส่วนได้ส่วนเสีย"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "User research aims to understand user needs, behaviors, motivations, and pain points to inform better design decisions.",
            thai: "การวิจัยผู้ใช้มีจุดมุ่งหมายเพื่อเข้าใจความต้องการ พฤติกรรม แรงจูงใจ และจุดปวดหัวของผู้ใช้เพื่อช่วยในการตัดสินใจออกแบบที่ดีขึ้น"
        }
    },
    {
        id: 16,
        type: "SPOT THE ERROR",
        question: {
            english: "A button labeled 'Click Here' without context. What's wrong?",
            thai: "ปุ่มที่มีข้อความ 'Click Here' โดยไม่มีบริบท อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong color choice",
                    thai: "เลือกสีผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Label is not descriptive enough",
                    thai: "ข้อความไม่ชัดเจนพอ"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Button is too small",
                    thai: "ปุ่มเล็กเกินไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong font",
                    thai: "ฟอนต์ผิด"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Button labels should be descriptive and tell users exactly what will happen when clicked (e.g., 'Download Report', 'Submit Form').",
            thai: "ข้อความในปุ่มควรมีคำอธิบายและบอกผู้ใช้อย่างชัดเจนว่าจะเกิดอะไรขึ้นเมื่อคลิก (เช่น 'ดาวน์โหลดรายงาน', 'ส่งแบบฟอร์ม')"
        }
    },
    {
        id: 17,
        type: "SPOT THE ERROR",
        question: {
            english: "Red text on green background for important information. What's the problem?",
            thai: "ข้อความสีแดงบนพื้นหลังสีเขียวสำหรับข้อมูลสำคัญ ปัญหาคืออะไร?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Poor color contrast and readability",
                    thai: "ความตัดกันของสีและการอ่านได้แย่"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Too many colors",
                    thai: "สีมากเกินไป"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong font size",
                    thai: "ขนาดฟอนต์ผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong alignment",
                    thai: "การจัดตำแหน่งผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Red text on green background creates poor contrast and can be difficult to read, especially for users with color blindness.",
            thai: "ข้อความสีแดงบนพื้นหลังสีเขียวสร้างความตัดกันที่แย่และอาจอ่านยาก โดยเฉพาะสำหรับผู้ใช้ที่ตาบอดสี"
        }
    },
    {
        id: 18,
        type: "SPOT THE ERROR",
        question: {
            english: "Navigation menu with 15 main items all visible at once. What's wrong?",
            thai: "เมนูนำทางที่มี 15 รายการหลักแสดงทั้งหมดพร้อมกัน อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Too many options causing decision paralysis",
                    thai: "ตัวเลือกมากเกินไปทำให้เกิดอาการเลือกไม่ถูก"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong color scheme",
                    thai: "โครงร่างสีผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong font type",
                    thai: "ประเภทฟอนต์ผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong positioning",
                    thai: "การจัดตำแหน่งผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Having too many navigation items violates the 7±2 rule and can overwhelm users. Consider grouping items or using dropdown menus.",
            thai: "การมีรายการนำทางมากเกินไปขัดต่อกฎ 7±2 และอาจทำให้ผู้ใช้งงงวย ควรพิจารณาจัดกลุ่มรายการหรือใช้เมนูแบบดรอปดาวน์"
        }
    },
    {
        id: 19,
        type: "SPOT THE ERROR",
        question: {
            english: "Form with no error messages when users submit invalid data. What's missing?",
            thai: "แบบฟอร์มที่ไม่มีข้อความข้อผิดพลาดเมื่อผู้ใช้ส่งข้อมูลที่ไม่ถูกต้อง อะไรขาด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "User feedback and validation messages",
                    thai: "การตอบกลับของผู้ใช้และข้อความตรวจสอบ"
                }
            },
            {
                id: 'b',
                text: {
                    english: "More input fields",
                    thai: "ช่องใส่ข้อมูลเพิ่มเติม"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Better colors",
                    thai: "สีที่ดีกว่า"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Larger buttons",
                    thai: "ปุ่มที่ใหญ่กว่า"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Forms should provide clear error messages and validation feedback to help users understand what went wrong and how to fix it.",
            thai: "แบบฟอร์มควรให้ข้อความข้อผิดพลาดและข้อเสนอแนะการตรวจสอบที่ชัดเจนเพื่อช่วยให้ผู้ใช้เข้าใจว่าเกิดอะไรขึ้นและวิธีแก้ไข"
        }
    },
    {
        id: 20,
        type: "SPOT THE ERROR",
        question: {
            english: "Search results showing 'No results found' with no suggestions. What's wrong?",
            thai: "ผลการค้นหาแสดง 'ไม่พบผลลัพธ์' โดยไม่มีคำแนะนำ อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Missing helpful suggestions or alternatives",
                    thai: "ขาดคำแนะนำหรือทางเลือกที่เป็นประโยชน์"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong page layout",
                    thai: "การจัดวางหน้าผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong font size",
                    thai: "ขนาดฟอนต์ผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong colors",
                    thai: "สีผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Empty states should provide helpful suggestions, related content, or alternative actions rather than just stating that nothing was found.",
            thai: "สถานะว่างควรให้คำแนะนำที่เป็นประโยชน์ เนื้อหาที่เกี่ยวข้อง หรือการกระทำทางเลือกแทนที่จะแค่บอกว่าไม่พบอะไร"
        }
    },
    {
        id: 21,
        type: "SPOT THE ERROR",
        question: {
            english: "Mobile app with tiny text (8px font size). What's the problem?",
            thai: "แอปมือถือที่มีข้อความเล็กมาก (ฟอนต์ขนาด 8px) ปัญหาคืออะไร?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Text too small for mobile readability",
                    thai: "ข้อความเล็กเกินไปสำหรับการอ่านบนมือถือ"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong text color",
                    thai: "สีข้อความผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong alignment",
                    thai: "การจัดตำแหน่งผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Too much text",
                    thai: "ข้อความมากเกินไป"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Mobile text should be at least 16px for good readability. 8px is far too small for mobile devices and creates accessibility issues.",
            thai: "ข้อความบนมือถือควรมีขนาดอย่างน้อย 16px เพื่อการอ่านที่ดี 8px เล็กเกินไปสำหรับอุปกรณ์มือถือและสร้างปัญหาการเข้าถึง"
        }
    },
    {
        id: 22,
        type: "SPOT THE ERROR",
        question: {
            english: "Loading screen with no progress indicator or message. What's missing?",
            thai: "หน้าจอโหลดไม่มีตัวบ่งชี้ความคืบหน้าหรือข้อความ อะไรขาด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "User feedback about loading progress",
                    thai: "การตอบกลับผู้ใช้เกี่ยวกับความคืบหน้าการโหลด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Better colors",
                    thai: "สีที่ดีกว่า"
                }
            },
            {
                id: 'c',
                text: {
                    english: "More buttons",
                    thai: "ปุ่มเพิ่มเติม"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Different layout",
                    thai: "เลย์เอาท์ที่แตกต่าง"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Loading screens should show progress indicators, estimated time, or at least confirm that the system is working to reduce user anxiety.",
            thai: "หน้าจอโหลดควรแสดงตัวบ่งชี้ความคืบหน้า เวลาประมาณ หรืออย่างน้อยยืนยันว่าระบบกำลังทำงานเพื่อลดความวิตกกังวลของผู้ใช้"
        }
    },
    {
        id: 23,
        type: "SPOT THE ERROR",
        question: {
            english: "Important delete button styled the same as regular action buttons. What's wrong?",
            thai: "ปุ่มลบที่สำคัญมีรูปแบบเดียวกับปุ่มการกระทำทั่วไป อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Destructive actions need distinct visual treatment",
                    thai: "การกระทำที่เป็นอันตรายต้องมีการจัดการทางภาพที่แตกต่าง"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong button size",
                    thai: "ขนาดปุ่มผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong font",
                    thai: "ฟอนต์ผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong position",
                    thai: "ตำแหน่งผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Destructive actions like delete should have distinct styling (often red) to warn users about the consequences of their action.",
            thai: "การกระทำที่เป็นอันตรายเช่นการลบควรมีรูปแบบที่แตกต่าง (มักเป็นสีแดง) เพื่อเตือนผู้ใช้เกี่ยวกับผลที่ตามมาจากการกระทำของพวกเขา"
        }
    },
    {
        id: 24,
        type: "SPOT THE ERROR",
        question: {
            english: "Website auto-plays video with sound when page loads. What's the problem?",
            thai: "เว็บไซต์เล่นวิดีโออัตโนมัติพร้อมเสียงเมื่อหน้าโหลด ปัญหาคืออะไร?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Violates user control and can be disruptive",
                    thai: "ขัดต่อการควบคุมของผู้ใช้และอาจรบกวน"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Video quality too low",
                    thai: "คุณภาพวิดีโอต่ำเกินไป"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong video format",
                    thai: "รูปแบบวิดีโอผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Video too short",
                    thai: "วิดีโอสั้นเกินไป"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Auto-playing media with sound violates user expectations and can be disruptive, especially in quiet environments. Users should control when media plays.",
            thai: "การเล่นสื่อโดยอัตโนมัติพร้อมเสียงขัดต่อความคาดหวังของผู้ใช้และอาจรบกวน โดยเฉพาะในสภาพแวดล้อมที่เงียบ ผู้ใช้ควรควบคุมเมื่อสื่อเล่น"
        }
    },
    {
        id: 25,
        type: "SPOT THE ERROR",
        question: {
            english: "Breadcrumb navigation showing: Home > > Products > Laptops. What's wrong?",
            thai: "การนำทางแบบ breadcrumb แสดง: หน้าแรก > > ผลิตภัณฑ์ > แล็ปท็อป อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Missing breadcrumb level",
                    thai: "ขาดระดับ breadcrumb"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong separator symbol",
                    thai: "สัญลักษณ์แยกผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Too many levels",
                    thai: "ระดับมากเกินไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong font size",
                    thai: "ขนาดฟอนต์ผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "There's a missing level between 'Home' and 'Products' as indicated by the double separator (> >). All breadcrumb levels should be clearly labeled.",
            thai: "มีระดับที่หายไประหว่าง 'หน้าแรก' และ 'ผลิตภัณฑ์' ตามที่ระบุโดยตัวแยกคู่ (> >) ระดับ breadcrumb ทั้งหมดควรมีป้ายกำกับที่ชัดเจน"
        }
    },
    {
        id: 26,
        type: "SPOT THE ERROR",
        question: {
            english: "Password field showing actual characters instead of dots/asterisks. What's the security issue?",
            thai: "ช่องรหัสผ่านแสดงตัวอักษรจริงแทนจุดหรือดอกจัน ปัญหาความปลอดภัยคืออะไร?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Password should be masked for security",
                    thai: "รหัสผ่านควรถูกปิดบังเพื่อความปลอดภัย"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong input field color",
                    thai: "สีช่องใส่ข้อมูลผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Field too narrow",
                    thai: "ช่องแคบเกินไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong label position",
                    thai: "ตำแหน่งป้ายกำกับผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Password fields should mask input with dots or asterisks to prevent others from seeing the password being typed.",
            thai: "ช่องรหัสผ่านควรปิดบังการป้อนข้อมูลด้วยจุดหรือดอกจันเพื่อป้องกันไม่ให้คนอื่นเห็นรหัสผ่านที่พิมพ์"
        }
    },
    {
        id: 27,
        type: "SPOT THE ERROR",
        question: {
            english: "Modal popup with no close button or escape method. What's wrong?",
            thai: "Modal popup ไม่มีปุ่มปิดหรือวิธีออก อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Users need a clear way to close the modal",
                    thai: "ผู้ใช้ต้องการวิธีที่ชัดเจนในการปิด modal"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong modal size",
                    thai: "ขนาด modal ผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong background color",
                    thai: "สีพื้นหลังผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong animation",
                    thai: "แอนิเมชันผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Every modal should have multiple ways to close it - close button, ESC key, and clicking outside the modal for better user control.",
            thai: "Modal ทุกตัวควรมีหลายวิธีในการปิด - ปุ่มปิด, ปุ่ม ESC, และการคลิกข้างนอก modal เพื่อการควบคุมผู้ใช้ที่ดีขึ้น"
        }
    },
    {
        id: 28,
        type: "SPOT THE ERROR",
        question: {
            english: "Link text says 'Read More' but doesn't indicate what topic it's about. What's missing?",
            thai: "ข้อความลิงก์เขียนว่า 'อ่านเพิ่มเติม' แต่ไม่ระบุว่าเป็นเรื่องอะไร อะไรขาด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Descriptive link text for context",
                    thai: "ข้อความลิงก์ที่อธิบายเพื่อให้เข้าใจบริบท"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Different color",
                    thai: "สีที่แตกต่าง"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Larger font size",
                    thai: "ขนาดฟอนต์ใหญ่กว่า"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Underline decoration",
                    thai: "การขีดเส้นใต้"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Links should be descriptive and self-explanatory. Instead of 'Read More', use 'Read More About Product Features' or similar descriptive text.",
            thai: "ลิงก์ควรมีคำอธิบายและอธิบายตัวเอง แทนที่จะใช้ 'อ่านเพิ่มเติม' ให้ใช้ 'อ่านเพิ่มเติมเกี่ยวกับคุณสมบัติผลิตภัณฑ์' หรือข้อความอธิบายที่คล้ายกัน"
        }
    },
    {
        id: 29,
        type: "SPOT THE ERROR",
        question: {
            english: "Image without alt text for screen readers. What accessibility issue exists?",
            thai: "ภาพไม่มีข้อความ alt สำหรับ screen reader มีปัญหาการเข้าถึงอะไร?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Missing alternative text for visually impaired users",
                    thai: "ขาดข้อความทางเลือกสำหรับผู้ใช้ที่มีปัญหาการมองเห็น"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong image format",
                    thai: "รูปแบบภาพผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Image too large",
                    thai: "ภาพใหญ่เกินไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong image position",
                    thai: "ตำแหน่งภาพผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "All images should have descriptive alt text so screen readers can describe the image content to visually impaired users.",
            thai: "ภาพทั้งหมดควรมีข้อความ alt ที่อธิบายเพื่อให้ screen reader สามารถอธิบายเนื้อหาของภาพให้ผู้ใช้ที่มีปัญหาการมองเห็นฟัง"
        }
    },
    {
        id: 30,
        type: "SPOT THE ERROR",
        question: {
            english: "Form submits immediately on single click without confirmation for irreversible action. What's dangerous?",
            thai: "แบบฟอร์มส่งทันทีเมื่อคลิกครั้งเดียวโดยไม่มีการยืนยันสำหรับการกระทำที่ย้อนไม่ได้ อะไรอันตราย?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "No confirmation for destructive actions",
                    thai: "ไม่มีการยืนยันสำหรับการกระทำที่เป็นอันตราย"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong button color",
                    thai: "สีปุ่มผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Button too small",
                    thai: "ปุ่มเล็กเกินไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong form layout",
                    thai: "การจัดวางแบบฟอร์มผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "Irreversible or destructive actions should always have confirmation dialogs to prevent accidental submissions and give users a chance to reconsider.",
            thai: "การกระทำที่ย้อนไม่ได้หรือเป็นอันตรายควรมีกล่องโต้ตอบยืนยันเสมอเพื่อป้องกันการส่งโดยบังเอิญและให้โอกาสผู้ใช้ไตร่ตรองใหม่"
        }
    }
];