import { Category } from "./models/category";
import { Issue } from "./models/issue";


export const sample_issues: Issue[] = [
    {
        id:"1",
        type: "شكوى 1",
        date: "مايو ,4 ,2023",
        city: "الرياض",
        admin: "ادارة الشكاوي",
        status: "تم قبولها",
    },
    {
        id:"2",
        type: "شكوى 1",
        date: "مايو ,4 ,2023",
        city: "الرياض",
        admin: "ادارة الشكاوي",
        status: "تم قبولها",
    },
    {
        id:"3",
        type: "شكوى 1",
        date: "مايو ,4 ,2023",
        city: "الرياض",
        admin: "ادارة الشكاوي",
        status: "تم قبولها",
    },
    {
        id:"4",
        type: "شكوى 1",
        date: "مايو ,4 ,2023",
        city: "القاهرة",
        admin: "ادارة الموارد",
        status: "تم قبولها",
    },
    {
        id:"5",
        type: "شكوى 1",
        date: "مايو ,4 ,2023",
        city: "عمان",
        admin: "ادارة الشكاوي",
        status: "تم قبولها",
    }
]

export const sample_cat: Category[] = [
    {
        id:"1",
        title: "شكاوي جديدة",
        count: 150,
    },
    {
        id:"2",
        title: "شكاوي تم اعتمادها",
        count: 150,
    },
    {
        id:"3",
        title: "الشكاوي المرفوضة",
        count: 44,
    },
    {
        id:"4",
        title: "الشكاوي المرفوضة",
        count: 44,
    }
] 