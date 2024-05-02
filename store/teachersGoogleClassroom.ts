import { defineStore } from "pinia";

export const useTeachersGoogleClassroomStore = defineStore('teachersGoogleClassroom-store', () => {
    const teacher = ref<TeachersGoogleClassroom[]>([
      {
        courseId: '668079603947',
        userId: '114168753083034044805',
        profile: {
          id: '114168753083034044805',
          name: {
            givenName: 'Adam ',
            familyName: 'Smasher',
            fullName: 'Adam Smasher',
            Geschlecht:' männlich',
            Gender:'androgyn',
            Nationalität: 'Deutsch',
            Languages: ['ger', 'dut', 'tur'],
            Age: '25',
            birthday: '05.05.1991',
            Country: 'Deutschland',
            City: 'Düsseldorf',
            Street: 'Die Straße 1',
            Zip: '23451',
            Phone: '+49 123 456 789',
            Email: 'dfr@gmail.com',
            Hobby: 'Hockey',
          },
        },
      },
    ]);
  
    return {
     teacher,
    };
  });