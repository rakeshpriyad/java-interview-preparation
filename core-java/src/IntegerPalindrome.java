import java.util.ArrayList;
import java.util.List;

public class IntegerPalindrome {

    public static void main(String[] args) {
        //getDigitList(1345).stream().forEach(System.out::println);
       // System.out.println(isPalindromeInteger(121));
       int nextP= findNextPalindrome(13653796);
        System.out.println(nextP);
    }

    public static boolean isPalindromeInteger(int n){
        List<Integer> digitList = getDigitList(n);
        Object[] digitArray = digitList.toArray();
        int j =digitArray.length-1;
        boolean isPalindrome = true;
        for(int i =0; i<= j; i++){

            if(digitArray[i] != digitArray[j]){
                isPalindrome = false;
            }
            j--;
        }
        return isPalindrome;
    }

    public static List<Integer> getDigitList(int n){
        List<Integer> digitList = new ArrayList<>();
        if(n >0){
            while(n >0){
                int rem = n%10;
                digitList.add(rem);
                n = n/10;
            }
        }

        return digitList;
    }

    public static int findNextPalindrome(int n){

        if(isPalindromeInteger(n)){
            return n;
        }else {
           return findNextPalindrome(n+1);
        }

    }
}
