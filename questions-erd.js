const questions = [
    {
        id: 1,
        type: "IDENTIFICATION",
        question: {
            english: "Which entities would you typically find in a \"Car Rental\" system?",
            thai: "เอนทิตีใดที่คุณมักจะพบในระบบ \"เช่ารถ\""
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Car, Customer, Rental, Employee",
                    thai: "รถ, ลูกค้า, การเช่า, พนักงาน"
                }
            },
            {
                id: 'b', 
                text: {
                    english: "Student, Course, Grade, Teacher",
                    thai: "นักเรียน, วิชา, เกรด, ครู"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Patient, Doctor, Medicine, Room",
                    thai: "ผู้ป่วย, หมอ, ยา, ห้อง"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Book, Author, Publisher, Reader",
                    thai: "หนังสือ, ผู้เขียน, สำนักพิมพ์, ผู้อ่าน"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "In a car rental system, the main entities are Car (vehicles available for rent), Customer (people renting cars), Rental (rental transactions), and Employee (staff managing the system).",
            thai: "ในระบบเช่ารถ เอนทิตีหลักคือ รถ (ยานพาหนะที่ให้เช่า), ลูกค้า (คนที่เช่ารถ), การเช่า (ธุรกรรมการเช่า), และ พนักงาน (เจ้าหน้าที่จัดการระบบ)"
        }
    },
    {
        id: 2,
        type: "IDENTIFICATION",
        question: {
            english: "What is the most appropriate primary key for a \"STUDENT\" entity?",
            thai: "คีย์หลักที่เหมาะสมที่สุดสำหรับเอนทิตี \"นักเรียน\" คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "student_name",
                    thai: "ชื่อนักเรียน"
                }
            },
            {
                id: 'b',
                text: {
                    english: "student_id",
                    thai: "รหัสนักเรียน"
                }
            },
            {
                id: 'c',
                text: {
                    english: "phone_number",
                    thai: "หมายเลขโทรศัพท์"
                }
            },
            {
                id: 'd',
                text: {
                    english: "email",
                    thai: "อีเมล"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "student_id is the best primary key because it's unique, immutable, and specifically designed to identify each student uniquely. Names can be duplicated, phone numbers and emails can change.",
            thai: "รหัสนักเรียน เป็นคีย์หลักที่ดีที่สุดเพราะมีความเป็นเอกลักษณ์ ไม่เปลี่ยนแปลง และออกแบบมาเพื่อระบุนักเรียนแต่ละคนอย่างเป็นเอกลักษณ์ ชื่อสามารถซ้ำได้ หมายเลขโทรศัพท์และอีเมลสามารถเปลี่ยนแปลงได้"
        }
    },
    {
        id: 3,
        type: "IDENTIFICATION",
        question: {
            english: "What is the cardinality between DOCTOR and PATIENT in a hospital?",
            thai: "อัตราส่วนระหว่าง แพทย์ และ ผู้ป่วย ในโรงพยาบาลคืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "One-to-One (1:1)",
                    thai: "หนึ่งต่อหนึ่ง (1:1)"
                }
            },
            {
                id: 'b',
                text: {
                    english: "One-to-Many (1:M)",
                    thai: "หนึ่งต่อหลาย (1:M)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Many-to-Many (M:N)",
                    thai: "หลายต่อหลาย (M:N)"
                }
            },
            {
                id: 'd',
                text: {
                    english: "No relationship",
                    thai: "ไม่มีความสัมพันธ์"
                }
            }
        ],
        correct: 'c',
        explanation: {
            english: "It's Many-to-Many (M:N) because one doctor can treat many patients, and one patient can be treated by many doctors (specialists, consultants, etc.).",
            thai: "เป็นแบบ หลายต่อหลาย (M:N) เพราะแพทย์หนึ่งคนสามารถรักษาผู้ป่วยหลายคน และผู้ป่วยหนึ่งคนสามารถได้รับการรักษาจากแพทย์หลายคน (ผู้เชี่ยวชาญ, ที่ปรึกษา เป็นต้น)"
        }
    },
    {
        id: 4,
        type: "IDENTIFICATION",
        question: {
            english: "In BOOK(isbn, title, author, year), which is the primary key?",
            thai: "ใน หนังสือ(isbn, ชื่อ, ผู้แต่ง, ปี) อันไหนเป็นคีย์หลัก"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "title",
                    thai: "ชื่อ"
                }
            },
            {
                id: 'b',
                text: {
                    english: "author",
                    thai: "ผู้แต่ง"
                }
            },
            {
                id: 'c',
                text: {
                    english: "isbn",
                    thai: "isbn"
                }
            },
            {
                id: 'd',
                text: {
                    english: "year",
                    thai: "ปี"
                }
            }
        ],
        correct: 'c',
        explanation: {
            english: "ISBN (International Standard Book Number) is unique for each book and serves as a perfect primary key. Titles, authors, and years can be duplicated across different books.",
            thai: "ISBN (หมายเลขมาตรฐานสากลของหนังสือ) เป็นเอกลักษณ์สำหรับหนังสือแต่ละเล่มและเหมาะสมเป็นคีย์หลัก ชื่อ ผู้แต่ง และปี สามารถซ้ำกันได้ในหนังสือต่างเล่ม"
        }
    },
    {
        id: 5,
        type: "IDENTIFICATION",
        question: {
            english: "Which symbol represents an Entity in ERD?",
            thai: "สัญลักษณ์ใดแทนเอนทิตีใน ERD"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Diamond (เพชร)",
                    thai: "เพชร (Diamond)"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Rectangle (สี่เหลี่ยมผืนผ้า)",
                    thai: "สี่เหลี่ยมผืนผ้า (Rectangle)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Oval (วงรี)",
                    thai: "วงรี (Oval)"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Circle (วงกลม)",
                    thai: "วงกลม (Circle)"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "In ERD, a Rectangle represents an Entity. Diamond represents Relationship, Oval represents Attribute.",
            thai: "ใน ERD สี่เหลี่ยมผืนผ้าแทนเอนทิตี เพชรแทนความสัมพันธ์ วงรีแทนคุณสมบัติ"
        }
    },
    {
        id: 6,
        type: "IDENTIFICATION",
        question: {
            english: "In a school system, what's the relationship between TEACHER and SUBJECT?",
            thai: "ในระบบโรงเรียน ความสัมพันธ์ระหว่าง ครู และ วิชา คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "One-to-One (1:1)",
                    thai: "หนึ่งต่อหนึ่ง (1:1)"
                }
            },
            {
                id: 'b',
                text: {
                    english: "One-to-Many (1:M)",
                    thai: "หนึ่งต่อหลาย (1:M)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Many-to-Many (M:N)",
                    thai: "หลายต่อหลาย (M:N)"
                }
            },
            {
                id: 'd',
                text: {
                    english: "No relationship exists",
                    thai: "ไม่มีความสัมพันธ์"
                }
            }
        ],
        correct: 'c',
        explanation: {
            english: "It's Many-to-Many (M:N) because one teacher can teach multiple subjects, and one subject can be taught by multiple teachers.",
            thai: "เป็นแบบ หลายต่อหลาย (M:N) เพราะครูหนึ่งคนสามารถสอนหลายวิชาได้ และวิชาหนึ่งวิชาสามารถถูกสอนโดยครูหลายคนได้"
        }
    },
    {
        id: 7,
        type: "IDENTIFICATION",
        question: {
            english: "What symbol represents a Relationship in ERD?",
            thai: "สัญลักษณ์ใดแทนความสัมพันธ์ใน ERD"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Rectangle (สี่เหลี่ยมผืนผ้า)",
                    thai: "สี่เหลี่ยมผืนผ้า (Rectangle)"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Diamond (เพชร)",
                    thai: "เพชร (Diamond)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Oval (วงรี)",
                    thai: "วงรี (Oval)"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Triangle (สามเหลี่ยม)",
                    thai: "สามเหลี่ยม (Triangle)"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "In ERD, a Diamond represents a Relationship between entities. Rectangle represents Entity, Oval represents Attribute.",
            thai: "ใน ERD เพชรแทนความสัมพันธ์ระหว่างเอนทิตี สี่เหลี่ยมผืนผ้าแทนเอนทิตี วงรีแทนคุณสมบัติ"
        }
    },
    {
        id: 8,
        type: "IDENTIFICATION",
        question: {
            english: "What's the cardinality between CUSTOMER and ORDER in e-commerce?",
            thai: "อัตราส่วนระหว่าง ลูกค้า และ คำสั่งซื้อ ในอีคอมเมิร์ซคืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Many-to-Many (M:N)",
                    thai: "หลายต่อหลาย (M:N)"
                }
            },
            {
                id: 'b',
                text: {
                    english: "One-to-One (1:1)",
                    thai: "หนึ่งต่อหนึ่ง (1:1)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "One-to-Many (1:M)",
                    thai: "หนึ่งต่อหลาย (1:M)"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Many-to-One (M:1)",
                    thai: "หลายต่อหนึ่ง (M:1)"
                }
            }
        ],
        correct: 'c',
        explanation: {
            english: "It's One-to-Many (1:M) because one customer can place many orders, but each order belongs to only one customer.",
            thai: "เป็นแบบ หนึ่งต่อหลาย (1:M) เพราะลูกค้าหนึ่งคนสามารถสั่งซื้อได้หลายครั้ง แต่คำสั่งซื้อแต่ละครั้งเป็นของลูกค้าเพียงคนเดียว"
        }
    },
    {
        id: 9,
        type: "IDENTIFICATION",
        question: {
            english: "Which is NOT typically an entity in a \"Movie Theater\" system?",
            thai: "อันไหนที่ไม่ใช่เอนทิตีทั่วไปในระบบ \"โรงภาพยนตร์\""
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Movie (หนัง)",
                    thai: "หนัง (Movie)"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Customer (ลูกค้า)",
                    thai: "ลูกค้า (Customer)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Database (ฐานข้อมูล)",
                    thai: "ฐานข้อมูล (Database)"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Seat (ที่นั่ง)",
                    thai: "ที่นั่ง (Seat)"
                }
            }
        ],
        correct: 'c',
        explanation: {
            english: "Database is a technical component, not a business entity. Movie, Customer, and Seat are all real-world objects that need to be tracked in a movie theater system.",
            thai: "ฐานข้อมูล เป็นส่วนประกอบทางเทคนิค ไม่ใช่เอนทิตีทางธุรกิจ หนัง ลูกค้า และที่นั่ง เป็นวัตถุในโลกจริงที่จำเป็นต้องติดตามในระบบโรงภาพยนตร์"
        }
    },
    {
        id: 10,
        type: "IDENTIFICATION",
        question: {
            english: "What type of attribute is \"age\" if calculated from birth_date?",
            thai: "คุณสมบัติ \"อายุ\" เป็นประเภทใดหากคำนวณจาก วันเกิด"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Simple attribute",
                    thai: "คุณสมบัติแบบง่าย"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Composite attribute",
                    thai: "คุณสมบัติแบบประกอบ"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Derived attribute",
                    thai: "คุณสมบัติที่คำนวณได้"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Multivalued attribute",
                    thai: "คุณสมบัติหลายค่า"
                }
            }
        ],
        correct: 'c',
        explanation: {
            english: "Age is a derived attribute because it's calculated from another attribute (birth_date) and changes over time without being directly stored.",
            thai: "อายุ เป็นคุณสมบัติที่คำนวณได้เพราะคำนวณจากคุณสมบัติอื่น (วันเกิด) และเปลี่ยนแปลงตามเวลาโดยไม่ต้องเก็บโดยตรง"
        }
    },
    {
        id: 11,
        type: "IDENTIFICATION",
        question: {
            english: "What symbol represents an Attribute in ERD?",
            thai: "สัญลักษณ์ใดแทนคุณสมบัติใน ERD"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Rectangle (สี่เหลี่ยมผืนผ้า)",
                    thai: "สี่เหลี่ยมผืนผ้า (Rectangle)"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Diamond (เพชร)",
                    thai: "เพชร (Diamond)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Oval (วงรี)",
                    thai: "วงรี (Oval)"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Hexagon (หกเหลี่ยม)",
                    thai: "หกเหลี่ยม (Hexagon)"
                }
            }
        ],
        correct: 'c',
        explanation: {
            english: "In ERD, an Oval represents an Attribute. Rectangle represents Entity, Diamond represents Relationship.",
            thai: "ใน ERD วงรีแทนคุณสมบัติ สี่เหลี่ยมผืนผ้าแทนเอนทิตี เพชรแทนความสัมพันธ์"
        }
    },
    {
        id: 12,
        type: "IDENTIFICATION",
        question: {
            english: "In a bank system, what's the relationship between CUSTOMER and ACCOUNT?",
            thai: "ในระบบธนาคาร ความสัมพันธ์ระหว่าง ลูกค้า และ บัญชี คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "One-to-One (1:1)",
                    thai: "หนึ่งต่อหนึ่ง (1:1)"
                }
            },
            {
                id: 'b',
                text: {
                    english: "One-to-Many (1:M)",
                    thai: "หนึ่งต่อหลาย (1:M)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Many-to-Many (M:N)",
                    thai: "หลายต่อหลาย (M:N)"
                }
            },
            {
                id: 'd',
                text: {
                    english: "No relationship",
                    thai: "ไม่มีความสัมพันธ์"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "It's One-to-Many (1:M) because one customer can have multiple accounts (savings, checking, etc.), but each account belongs to one customer.",
            thai: "เป็นแบบ หนึ่งต่อหลาย (1:M) เพราะลูกค้าหนึ่งคนสามารถมีบัญชีหลายบัญชี (ออมทรัพย์ กระแสรายวัน ฯลฯ) แต่บัญชีแต่ละบัญชีเป็นของลูกค้าเพียงคนเดียว"
        }
    },
    {
        id: 13,
        type: "IDENTIFICATION",
        question: {
            english: "Which is the correct way to show a primary key in ERD?",
            thai: "วิธีใดที่ถูกต้องในการแสดงคีย์หลักใน ERD"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Bold text",
                    thai: "ตัวหนา"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Underlined text",
                    thai: "ขีดเส้นใต้"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Italic text",
                    thai: "ตัวเอียง"
                }
            },
            {
                id: 'd',
                text: {
                    english: "ALL CAPS",
                    thai: "ตัวอักษรใหญ่ทั้งหมด"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "In ERD notation, primary keys are typically shown with underlined text to distinguish them from other attributes.",
            thai: "ในสัญลักษณ์ ERD คีย์หลักมักแสดงด้วยการขีดเส้นใต้เพื่อแยกแยะจากคุณสมบัติอื่น"
        }
    },
    {
        id: 14,
        type: "IDENTIFICATION",
        question: {
            english: "What's the main purpose of ERD?",
            thai: "วัตถุประสงค์หลักของ ERD คืออะไร"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "To write code faster",
                    thai: "เพื่อเขียนโค้ดเร็วขึ้น"
                }
            },
            {
                id: 'b',
                text: {
                    english: "To visualize database structure before implementation",
                    thai: "เพื่อแสดงโครงสร้างฐานข้อมูลก่อนการพัฒนา"
                }
            },
            {
                id: 'c',
                text: {
                    english: "To replace actual databases",
                    thai: "เพื่อแทนที่ฐานข้อมูลจริง"
                }
            },
            {
                id: 'd',
                text: {
                    english: "To make presentations look better",
                    thai: "เพื่อให้การนำเสนอดูดีขึ้น"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "ERD's main purpose is to visualize and plan the database structure, relationships, and constraints before actual implementation, helping in better design and communication.",
            thai: "วัตถุประสงค์หลักของ ERD คือการแสดงและวางแผนโครงสร้างฐานข้อมูล ความสัมพันธ์ และข้อจำกัดก่อนการพัฒนาจริง ช่วยในการออกแบบและการสื่อสารที่ดีขึ้น"
        }
    },
    {
        id: 15,
        type: "IDENTIFICATION",
        question: {
            english: "In inventory system, which entities are most essential?",
            thai: "ในระบบคลังสินค้า เอนทิตีใดที่สำคัญที่สุด"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Product, Supplier, Stock Transaction",
                    thai: "สินค้า, ผู้จัดจำหน่าย, ธุรกรรมสต๊อก"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Student, Teacher, Course",
                    thai: "นักเรียน, ครู, วิชา"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Patient, Doctor, Medicine",
                    thai: "ผู้ป่วย, หมอ, ยา"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Movie, Actor, Director",
                    thai: "หนัง, นักแสดง, ผู้กำกับ"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "In an inventory system, Product (items in stock), Supplier (source of products), and Stock Transaction (movements in/out) are the core entities needed to track inventory.",
            thai: "ในระบบคลังสินค้า สินค้า (รายการในสต๊อก), ผู้จัดจำหน่าย (แหล่งของสินค้า), และธุรกรรมสต๊อก (การเข้า-ออกสินค้า) เป็นเอนทิตีหลักที่จำเป็นในการติดตามสินค้าคงคลัง"
        }
    },
    {
        id: 16,
        type: "SPOT THE ERROR",
        question: {
            english: "STUDENT(name, email, phone, major) - What's wrong?",
            thai: "นักเรียน(ชื่อ, อีเมล, โทรศัพท์, สาขา) - อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Too many attributes",
                    thai: "คุณสมบัติมากเกินไป"
                }
            },
            {
                id: 'b',
                text: {
                    english: "No primary key",
                    thai: "ไม่มีคีย์หลัก"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong attribute names",
                    thai: "ชื่อคุณสมบัติผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Nothing wrong",
                    thai: "ไม่มีอะไรผิด"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "The STUDENT entity is missing a primary key like student_id. Every entity must have a unique identifier to distinguish between different students.",
            thai: "เอนทิตี นักเรียน ขาดคีย์หลักเช่น รหัสนักเรียน ทุกเอนทิตีต้องมีตัวระบุเฉพาะเพื่อแยกแยะระหว่างนักเรียนที่แตกต่างกัน"
        }
    },
    {
        id: 17,
        type: "SPOT THE ERROR",
        question: {
            english: "STUDENT ←→ COURSE (M:N) connected directly. What's the error?",
            thai: "นักเรียน ←→ วิชา (M:N) เชื่อมต่อโดยตรง ข้อผิดพลาดคืออะไร?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong cardinality",
                    thai: "อัตราส่วนผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Missing junction table",
                    thai: "ขาดตารางเชื่อมต่อ"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Too many entities",
                    thai: "เอนทิตีมากเกินไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong symbols",
                    thai: "สัญลักษณ์ผิด"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Many-to-Many relationships cannot be implemented directly in relational databases. They need a junction/bridge table (like ENROLLMENT) to store the relationship data.",
            thai: "ความสัมพันธ์แบบหลายต่อหลายไม่สามารถสร้างโดยตรงในฐานข้อมูลเชิงสัมพันธ์ต้องมีตารางเชื่อมต่อ (เช่น การลงทะเบียน) เพื่อเก็บข้อมูลความสัมพันธ์"
        }
    },
    {
        id: 18,
        type: "SPOT THE ERROR",
        question: {
            english: "CUSTOMER(customer_id, order_id, name) - What's wrong?",
            thai: "ลูกค้า(รหัสลูกค้า, รหัสคำสั่งซื้อ, ชื่อ) - อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Foreign key in wrong entity",
                    thai: "คีย์ต่างประเทศอยู่ในเอนทิตีผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "No primary key",
                    thai: "ไม่มีคีย์หลัก"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Too few attributes",
                    thai: "คุณสมบัติน้อยเกินไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong naming",
                    thai: "การตั้งชื่อผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "order_id should not be in CUSTOMER entity. It should be in ORDER entity as primary key, with customer_id as foreign key referencing CUSTOMER.",
            thai: "รหัสคำสั่งซื้อ ไม่ควรอยู่ในเอนทิตี ลูกค้า ควรอยู่ในเอนทิตี คำสั่งซื้อ เป็นคีย์หลัก โดยมี รหัสลูกค้า เป็นคีย์ต่างประเทศอ้างอิงไปยัง ลูกค้า"
        }
    },
    {
        id: 19,
        type: "SPOT THE ERROR",
        question: {
            english: "Two entities: PERSON(id, name) and PEOPLE(id, name). What's wrong?",
            thai: "สองเอนทิตี: บุคคล(รหัส, ชื่อ) และ ผู้คน(รหัส, ชื่อ) อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong symbols",
                    thai: "สัญลักษณ์ผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Redundant entities",
                    thai: "เอนทิตีซ้ำซ้อน"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Missing attributes",
                    thai: "ขาดคุณสมบัติ"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong cardinality",
                    thai: "อัตราส่วนผิด"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "PERSON and PEOPLE represent the same concept (people/individuals) and have identical attributes. This is redundant - only one entity is needed.",
            thai: "บุคคล และ ผู้คน แทนแนวคิดเดียวกัน (คน/บุคคล) และมีคุณสมบัติเหมือนกัน นี่เป็นการซ้ำซ้อน ต้องใช้เพียงเอนทิตีเดียว"
        }
    },
    {
        id: 20,
        type: "SPOT THE ERROR",
        question: {
            english: "Relationship diamond has no cardinality labels. What's wrong?",
            thai: "เพชรความสัมพันธ์ไม่มีป้ายอัตราส่วน อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong symbol used",
                    thai: "ใช้สัญลักษณ์ผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Missing cardinality specification",
                    thai: "ขาดการระบุอัตราส่วน"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Too many connections",
                    thai: "การเชื่อมต่อมากเกินไป"
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
        correct: 'b',
        explanation: {
            english: "Every relationship in ERD must specify cardinality (1:1, 1:M, M:N) to show how entities are related. Missing cardinality makes the relationship incomplete.",
            thai: "ความสัมพันธ์ทุกความสัมพันธ์ใน ERD ต้องระบุอัตราส่วน (1:1, 1:M, M:N) เพื่อแสดงว่าเอนทิตีสัมพันธ์กันอย่างไร การขาดอัตราส่วนทำให้ความสัมพันธ์ไม่สมบูรณ์"
        }
    },
    {
        id: 21,
        type: "SPOT THE ERROR",
        question: {
            english: "Primary key \"student_id\" allows NULL values. What's wrong?",
            thai: "คีย์หลัก \"รหัสนักเรียน\" อนุญาตค่า NULL อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong data type",
                    thai: "ชนิดข้อมูลผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Primary keys cannot be NULL",
                    thai: "คีย์หลักไม่สามารถเป็น NULL ได้"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong attribute name",
                    thai: "ชื่อคุณสมบัติผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Should be foreign key",
                    thai: "ควรเป็นคีย์ต่างประเทศ"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Primary keys must be unique and NOT NULL. Allowing NULL values violates the fundamental rule of primary keys as unique identifiers.",
            thai: "คีย์หลักต้องเป็นเอกลักษณ์และไม่เป็น NULL การอนุญาตค่า NULL ขัดต่อกฎพื้นฐานของคีย์หลักในฐานะตัวระบุเฉพาะ"
        }
    },
    {
        id: 22,
        type: "SPOT THE ERROR",
        question: {
            english: "Customer entity: CUSTOMER(id1, id2, name) with two primary keys. What's wrong?",
            thai: "เอนทิตีลูกค้า: ลูกค้า(รหัส1, รหัส2, ชื่อ) มีคีย์หลักสองตัว อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Too many primary keys",
                    thai: "คีย์หลักมากเกินไป"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Wrong symbols",
                    thai: "สัญลักษณ์ผิด"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Missing attributes",
                    thai: "ขาดคุณสมบัติ"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong relationships",
                    thai: "ความสัมพันธ์ผิด"
                }
            }
        ],
        correct: 'a',
        explanation: {
            english: "An entity can have only ONE primary key. If multiple attributes are needed to uniquely identify records, they form a composite primary key, not multiple separate primary keys.",
            thai: "เอนทิตีสามารถมีคีย์หลักได้เพียงตัวเดียว หากต้องใช้หลายคุณสมบัติในการระบุเรคคอร์ดเฉพาะ จะรวมกันเป็นคีย์หลักแบบประกอบ ไม่ใช่คีย์หลักหลายตัวแยกจากกัน"
        }
    },
    {
        id: 23,
        type: "SPOT THE ERROR",
        question: {
            english: "Weak entity \"ORDER_ITEM\" exists without owner entity. What's wrong?",
            thai: "เอนทิตีอ่อน \"รายการคำสั่งซื้อ\" มีอยู่โดยไม่มีเอนทิตีเจ้าของ อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong symbol",
                    thai: "สัญลักษณ์ผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Missing identifying relationship",
                    thai: "ขาดความสัมพันธ์ระบุตัวตน"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Too many attributes",
                    thai: "คุณสมบัติมากเกินไป"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong cardinality",
                    thai: "อัตราส่วนผิด"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Weak entities depend on owner entities for identification. ORDER_ITEM needs an identifying relationship with ORDER entity to exist meaningfully.",
            thai: "เอนทิตีอ่อนต้องพึ่งพาเอนทิตีเจ้าของในการระบุตัวตน รายการคำสั่งซื้อ ต้องมีความสัมพันธ์ระบุตัวตนกับเอนทิตี คำสั่งซื้อ เพื่อให้มีความหมาย"
        }
    },
    {
        id: 24,
        type: "SPOT THE ERROR",
        question: {
            english: "A→B→C→A (circular reference). What's the problem?",
            thai: "A→B→C→A (การอ้างอิงแบบวงกลม) ปัญหาคืออะไร?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Too many entities",
                    thai: "เอนทิตีมากเกินไป"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Circular dependency",
                    thai: "การพึ่งพาแบบวงกลม"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong symbols",
                    thai: "สัญลักษณ์ผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Missing attributes",
                    thai: "ขาดคุณสมบัติ"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Circular dependencies (A depends on B, B on C, C on A) can cause problems in database operations and should be avoided through proper design.",
            thai: "การพึ่งพาแบบวงกลม (A พึ่งพา B, B พึ่งพา C, C พึ่งพา A) อาจทำให้เกิดปัญหาในการดำเนินการฐานข้อมูลและควรหลีกเลี่ยงด้วยการออกแบบที่เหมาะสม"
        }
    },
    {
        id: 25,
        type: "SPOT THE ERROR",
        question: {
            english: "EMPLOYEE entity connects to itself for \"supervises\" relationship but no role labels. What's missing?",
            thai: "เอนทิตีพนักงานเชื่อมต่อกับตัวเองสำหรับความสัมพันธ์ \"ดูแล\" แต่ไม่มีป้ายบทบาท อะไรขาด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "More entities",
                    thai: "เอนทิตีเพิ่มเติม"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Role names (supervisor/subordinate)",
                    thai: "ชื่อบทบาท (ผู้ดูแล/ผู้ใต้บังคับบัญชา)"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Different symbols",
                    thai: "สัญลักษณ์ที่แตกต่าง"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Primary keys",
                    thai: "คีย์หลัก"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Self-referencing relationships need role names to clarify which role each entity instance plays (supervisor vs. subordinate in this case).",
            thai: "ความสัมพันธ์ที่อ้างอิงตัวเองต้องมีชื่อบทบาทเพื่อชี้แจงว่าแต่ละเอนทิตีมีบทบาทอะไร (ผู้ดูแล กับ ผู้ใต้บังคับบัญชา ในกรณีนี้)"
        }
    },
    {
        id: 26,
        type: "SPOT THE ERROR",
        question: {
            english: "Attribute \"total_price\" stored in database but can be calculated. What's wrong?",
            thai: "คุณสมบัติ \"ราคารวม\" เก็บในฐานข้อมูลแต่สามารถคำนวณได้ อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong data type",
                    thai: "ชนิดข้อมูลผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Should be derived attribute",
                    thai: "ควรเป็นคุณสมบัติที่คำนวณได้"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong entity",
                    thai: "เอนทิตีผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Missing foreign key",
                    thai: "ขาดคีย์ต่างประเทศ"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "total_price should be a derived attribute (calculated from quantity × unit_price) rather than stored, to avoid redundancy and maintain data consistency.",
            thai: "ราคารวม ควรเป็นคุณสมบัติที่คำนวณได้ (จาก จำนวน × ราคาต่อหน่วย) แทนการเก็บข้อมูล เพื่อหลีกเลี่ยงความซ้ำซ้อนและรักษาความสอดคล้องของข้อมูล"
        }
    },
    {
        id: 27,
        type: "SPOT THE ERROR",
        question: {
            english: "PERSON entity has attribute \"phone_numbers\" storing multiple values. What's wrong?",
            thai: "เอนทิตีบุคคลมีคุณสมบัติ \"หมายเลขโทรศัพท์\" เก็บหลายค่า อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong symbol",
                    thai: "สัญลักษณ์ผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Multivalued attribute needs separate entity",
                    thai: "คุณสมบัติหลายค่าต้องการเอนทิตีแยก"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong cardinality",
                    thai: "อัตราส่วนผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Missing primary key",
                    thai: "ขาดคีย์หลัก"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Multivalued attributes violate First Normal Form. Phone numbers should be stored in a separate PHONE entity with a relationship to PERSON.",
            thai: "คุณสมบัติหลายค่าขัดต่อกฎปกติรูปแบบที่หนึ่ง หมายเลขโทรศัพท์ควรเก็บในเอนทิตี โทรศัพท์ แยกต่างหากพร้อมความสัมพันธ์กับ บุคคล"
        }
    },
    {
        id: 28,
        type: "SPOT THE ERROR",
        question: {
            english: "\"ENROLLMENT\" relationship between STUDENT and COURSE has attributes (grade, date). What should it be?",
            thai: "ความสัมพันธ์ \"การลงทะเบียน\" ระหว่าง นักเรียน และ วิชา มีคุณสมบัติ (เกรด, วันที่) ควรเป็นอะไร?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Keep as relationship",
                    thai: "คงเป็นความสัมพันธ์"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Convert to entity",
                    thai: "แปลงเป็นเอนทิตี"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Remove attributes",
                    thai: "ลบคุณสมบัติ"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Change cardinality",
                    thai: "เปลี่ยนอัตราส่วน"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "When a relationship has attributes (grade, date), it should be converted to an entity (ENROLLMENT) to properly store these additional data.",
            thai: "เมื่อความสัมพันธ์มีคุณสมบัติ (เกรด, วันที่) ควรแปลงเป็นเอนทิตี (การลงทะเบียน) เพื่อเก็บข้อมูลเพิ่มเติมเหล่านี้อย่างเหมาะสม"
        }
    },
    {
        id: 29,
        type: "SPOT THE ERROR",
        question: {
            english: "Two entities CUSTOMER and CLIENT with same attributes and purpose. What's wrong?",
            thai: "สองเอนทิตี ลูกค้า และ ไคลเอนต์ มีคุณสมบัติและวัตถุประสงค์เดียวกัน อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong symbols",
                    thai: "สัญลักษณ์ผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Redundant entities should be merged",
                    thai: "เอนทิตีซ้ำซ้อนควรรวมกัน"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Missing relationships",
                    thai: "ขาดความสัมพันธ์"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Wrong cardinality",
                    thai: "อัตราส่วนผิด"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "CUSTOMER and CLIENT represent the same concept with identical attributes. This redundancy should be eliminated by using one entity.",
            thai: "ลูกค้า และ ไคลเอนต์ แทนแนวคิดเดียวกันด้วยคุณสมบัติเหมือนกัน ความซ้ำซ้อนนี้ควรขจัดโดยใช้เอนทิตีเดียว"
        }
    },
    {
        id: 30,
        type: "SPOT THE ERROR",
        question: {
            english: "Foreign key \"dept_name\" references attribute \"department_name\" (not primary key). What's wrong?",
            thai: "คีย์ต่างประเทศ \"ชื่อแผนก\" อ้างอิงคุณสมบัติ \"ชื่อแผนก\" (ไม่ใช่คีย์หลัก) อะไรผิด?"
        },
        options: [
            {
                id: 'a',
                text: {
                    english: "Wrong data type",
                    thai: "ชนิดข้อมูลผิด"
                }
            },
            {
                id: 'b',
                text: {
                    english: "Foreign key must reference primary key",
                    thai: "คีย์ต่างประเทศต้องอ้างอิงคีย์หลัก"
                }
            },
            {
                id: 'c',
                text: {
                    english: "Wrong entity",
                    thai: "เอนทิตีผิด"
                }
            },
            {
                id: 'd',
                text: {
                    english: "Missing attributes",
                    thai: "ขาดคุณสมบัติ"
                }
            }
        ],
        correct: 'b',
        explanation: {
            english: "Foreign keys must reference primary keys to maintain referential integrity. dept_name should reference the primary key of the DEPARTMENT entity.",
            thai: "คีย์ต่างประเทศต้องอ้างอิงคีย์หลักเพื่อรักษาความสมบูรณ์ของการอ้างอิง ชื่อแผนก ควรอ้างอิงคีย์หลักของเอนทิตี แผนก"
        }
    }
];
