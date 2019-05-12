package softwarePersistence;
import softwareDomain.*;

public class activityManagement 
{
	
	public static void addActivity(Project projectToModify, Activity activityToAdd)
	{
		projectToModify.activities.add(projectToModify.activities.size(), activityToAdd);
	}
	
	
	
}







