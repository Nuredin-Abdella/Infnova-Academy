const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const mockCourses = [
    {
        id: "1",
        title: "Full Stack Web Development Bootcamp",
        instructor: "Udutu Tadesse",
        category: "WEB DEVELOPMENT",
        level: "Intermediate",
        duration: "12 weeks",
        students: 3124,
        rating: 4.9,
        price: 89.99,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        badge: "Intermediate"
    },
    {
        id: "2",
        title: "Practical Machine Learning",
        instructor: "Bereket Tesfaye",
        category: "DATA SCIENCE",
        level: "Advanced",
        duration: "10 weeks",
        students: 1742,
        rating: 4.8,
        price: 129.99,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
        badge: "Advanced"
    },
    {
        id: "3",
        title: "UI/UX Design for Modern Products",
        instructor: "Hana Alemayehu",
        category: "DESIGN",
        level: "Beginner",
        duration: "8 weeks",
        students: 2891,
        rating: 4.7,
        price: 79.99,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        badge: "Beginner"
    },
    {
        id: "4",
        title: "Cloud Engineering with AWS",
        instructor: "Samuel Gelachew",
        category: "CLOUD COMPUTING",
        level: "Intermediate",
        duration: "9 weeks",
        students: 2015,
        rating: 4.6,
        price: 149.99,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        badge: "Intermediate"
    },
    {
        id: "5",
        title: "Mobile App Development with Flutter",
        instructor: "Natnael Desta",
        category: "MOBILE DEVELOPMENT",
        level: "Intermediate",
        duration: "10 weeks",
        students: 2563,
        rating: 4.8,
        price: 99.99,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
        badge: "Intermediate"
    },
    {
        id: "6",
        title: "Cybersecurity Foundations",
        instructor: "Mekid Girma",
        category: "SECURITY",
        level: "Beginner",
        duration: "6 weeks",
        students: 1489,
        rating: 4.7,
        price: 159.99,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
        badge: "Beginner"
    },
    {
        id: "7",
        title: "Data Analytics with Python",
        instructor: "Abel Haile",
        category: "DATA SCIENCE",
        level: "Beginner",
        duration: "7 weeks",
        students: 2614,
        rating: 4.8,
        price: 74.99,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        badge: "Beginner"
    },
    {
        id: "8",
        title: "Blockchain & Fintech Systems",
        instructor: "Yonas Bekele",
        category: "BLOCKCHAIN",
        level: "Advanced",
        duration: "11 weeks",
        students: 1321,
        rating: 4.5,
        price: 139.99,
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
        badge: "Advanced"
    }
];

export async function getCourses() {
    await delay(500);
    return mockCourses;
}

export async function getCourseById(id) {
    await delay(300);
    const course = mockCourses.find(c => c.id === id);
    if (!course) return null;

    return {
        ...course,
        description: "Learn how modern companies deploy and scale applications in the cloud.",
        longDescription: "Learn how modern companies deploy and scale applications in the cloud. Build resilient infrastructure, automate deployments, and understand cost-efficient architecture. This comprehensive course is designed to provide you with practical, hands-on experience and real-world skills.",
        curriculum: ["AWS", "Docker", "CI/CD", "Infrastructure", "System Design"],
        prerequisites: ["Basic computer skills", "Passion for learning"],
        whatYouLearn: ["AWS", "Docker", "CI/CD", "Infrastructure", "System Design"],
        instructorBio: "Expert professional with over 10 years of industry experience.",
        instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
        totalLectures: 156,
        totalDuration: course.duration,
        lastUpdated: "January 2025"
    };
}
