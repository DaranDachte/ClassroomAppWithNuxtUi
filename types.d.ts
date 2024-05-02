interface Classroom {
  id: string;
  name: string;
  teachers: Teacher[];
  students: Student[];
  VVStudents: VVStudent[];
  people: string[];
}

interface Teacher {
  id: string;
  name: string;
  isOwner: boolean;
 
}

interface Student {
  id: string;
  name: string;
  email: string;
  displayName: string;
  details: string;
}

interface VVStudent {
  id: string;
  name: string;
  isOwner: boolean;
}




interface StudentGoogleClassroom {
    courseId: string;
    userId: string;
    profile: {
      id: string;
      name: {
        givenName: string;
        familyName: string;
        fullName: string;
        Geschlecht: string,
        Gender:string,
        Nationalität: string;
        Languages: string[];
        Age: string;
        birthday: string;
        Country: string;
        City: string;
        Street: string;
        Zip: string;
        Phone: string;
        Email: string;
        Hobby: string;
      };
    };
  }

  interface TeachersGoogleClassroom {
    courseId: string;
    userId: string;
    profile: {
      id: string;
      name: {
        givenName: string;
        familyName: string;
        fullName: string;
        Geschlecht: string,
        Gender:string,
        Nationalität: string;
        Languages: string[];
        Age: string;
        birthday: string;
        Country: string;
        City: string;
        Street: string;
        Zip: string;
        Phone: string;
        Email: string;
        Hobby: string;
      };
    };
  }

  interface ClassroomModule {
    id: string;
    moduleId: string;
    moduleInstance: string;
    moduleTitle: string;
    trimester: string;
    raw: {
        id: string;
        name: string;
        section: string;
        descriptionHeading: string;
        description?: string;
        room?: string;
        ownerId: string;
        creationTime: string;
        updateTime: string;
        enrollmentCode: string;
        courseState: string;
        alternateLink: string;
        teacherGroupEmail: string;
        courseGroupEmail: string;
        teacherFolder: {
            id: string;
            title?: string;
            alternateLink?: string;
        };
        guardiansEnabled: boolean;
        calendarId: string;
        gradebookSettings: {
            calculationType: string;
            displaySetting: string;
        };
    };
    isValidClassroom: boolean;
    type: string;
    teachers: {
        id: string;
        name: string;
        isOwner: boolean;
        class: string;
        givenName: string;
        familyName: string;
        fullName: string;
        Geschlecht: string,
        Gender:string,
        Nationalität: string;
        Languages: string[];
        Age: string;
        birthday: string;
        Country: string;
        City: string;
        Street: string;
        Zip: string;
        Phone: string;
        Email: string;
        Hobby: string;
        
    }[];
    students: {
        id: string;
        name: string;
        email: string;
        displayName: string;
        details: string;
        givenName: string;
        familyName: string;
        fullName: string;
        Geschlecht: string,
        Gender:string,
        Nationalität: string;
        Languages: string[];
        Age: string;
        birthday: string;
        Country: string;
        City: string;
        Street: string;
        Zip: string;
        Phone: string;
        Email: string;
        Hobby: string;
    }[];
}





interface ContactListModule {
  emailAddresses: {
    metadata: {
      primary: boolean;
      verified?: boolean;
      source: {
        type: string;
        id: string;
      };
      sourcePrimary?: boolean;
    };
    value: string;
    type: string;
    formattedType: string;
    displayName: string;
  }[];
  names: {
    metadata: {
      primary: boolean;
      source: {
        type: string;
        id: string;
      };
    };
    displayName: string;
    familyName: string;
    givenName: string;
    displayNameLastFirst: string;
    unstructuredName: string;
  }[];
  raw: {
    resourceName: string;
    etag: string;
    names: {
      metadata: {
        primary: boolean;
        source: {
          type: string;
          id: string;
        };
      };
      displayName: string;
      familyName: string;
      givenName: string;
      displayNameLastFirst: string;
      unstructuredName: string;
    }[];
    emailAddresses: {
      metadata: {
        primary: boolean;
        source: {
          type: string;
          id: string;
        };
        sourcePrimary?: boolean;
      };
      value: string;
      type: string;
      formattedType: string;
      displayName: string;
    }[];
    organizations?: { // Добавляем опциональность
      metadata: {
        primary: boolean;
        source: {
          type: string;
          id: string;
        };
      };
      jobDescription: string;
    }[];
  };
}