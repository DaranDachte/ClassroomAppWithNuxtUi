import { defineStore } from "pinia";

export const useStudentGoogleClassroomStore = defineStore('studentGoogleClassroom-store', () => {
    const student = ref<StudentGoogleClassroom[]>([
      {
        courseId: '668079603947',
        userId: '114168753083034044707',
        profile: {
          id: '114168753083034044707',
          name: {
            givenName: 'John',
            familyName: 'Silverhand',
            fullName: 'John Silverhand',
            Geschlecht:' männlich',
            Gender:'intergeschlechtlich',
            Nationalität: 'Deutsch',
            Languages: ['ger', 'eng', 'rus'],
            Age: '25',
            birthday: '01.01.1996',
            Country: 'Deutschland',
            City: 'Berlin',
            Street: 'Karl-Marx-Str. 1',
            Zip: '12345',
            Phone: '+49 123 456 789',
            Email: 'asd@gmail.com',
            Hobby: 'Football',
          },
        },
      },
    ]);
  
    return {
      student,
    };
  });