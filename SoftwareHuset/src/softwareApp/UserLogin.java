package softwareApp;
import java.util.ArrayList;
import softwareDomain.Project;
import softwareDomain.User;
import softwarePersistence.*;
public class UserLogin 
{
	private static ArrayList<Project> nullAsProjectList = new ArrayList<Project>();
	private static ArrayList<Project> nullProjectList = new ArrayList<Project>();

	public static void loginUser(String userName) throws Exception
	{
		boolean userExist = checkifuserexist(userName);
		if(!(userExist))
		{
			throw new IllegalArgumentException("User does not exist");
		}
	}
	
	public static boolean checkifuserexist(String user)
	{
		return userManagement.companyList.stream().anyMatch(b-> b.USERNAME.matches(user));
	}
	
}
