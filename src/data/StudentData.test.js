import StudentData from './StudentData';

describe('StudentData', () => {
  let studentData;

  beforeEach(() => {
    studentData = new StudentData();
  });

  it('should return an array of student data', async () => {
    const data = await studentData.getData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(3);
  });

  it('should have correct properties for each student', async () => {
    const data = await studentData.getData();
    data.forEach((student) => {
      expect(student).toHaveProperty('id');
      expect(student).toHaveProperty('nameData');
      expect(student).toHaveProperty('emailData');
      expect(student).toHaveProperty('isPresentData');
    });
  });

  it('should have correct values for each student', async () => {
    const data = await studentData.getData();
    expect(data[0]).toEqual({
      id: 1,
      nameData: 'Ada',
      emailData: 'ada@dev.org',
      isPresentData: false,
    });
    expect(data[1]).toEqual({
      id: 2,
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org',
      isPresentData: false,
    });
    expect(data[2]).toEqual({
      id: 3,
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org',
      isPresentData: true,
    });
  });
});