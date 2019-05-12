package softwareApp;

public class LegalDate {

	public static boolean checkEndLaterThanStartDate(int startDay, int startMonth, int startYear, int endDay
			, int endMonth, int endYear) {
		assert true;
		if (endYear > startYear)
		{
			assert(endYear > startYear ==  true); //postconditon
			return true;
		}
		else if(endYear==startYear)
		{
			assert(endYear==startYear); //precondtion
			if (endMonth>startMonth)
			{
				assert (endMonth>startMonth && endYear==startYear == true); //postconditon
				return true;
			}
			else if (endMonth==startMonth)
			{
				assert(endMonth==startMonth && endYear==startYear); //preconditon
				if (endDay>=startDay)
				{
					assert (endDay>=startDay == true); // postcondition
					return true;
				}
			}
		}
			throw new IllegalArgumentException("End date cannot be before start date");
	}

}
