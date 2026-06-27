import java.util.Arrays;

public class SearchService {

    
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }

    
    public static void sortProductsById(Product[] products) {
        Arrays.sort(products);
    }

    
    public static Product binarySearch(Product[] sortedProducts, int targetId) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            Product midProduct = sortedProducts[mid];
            int midId = midProduct.getProductId();

            if (midId == targetId) {
                return midProduct;
            } else if (midId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

   
    public static void main(String[] args) {
        Product[] products = new Product[] {
                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Shirt", "Apparel"),
                new Product(105, "Book", "Stationery"),
                new Product(102, "Phone", "Electronics"),
                new Product(104, "Shoes", "Apparel")
        };

        System.out.println("--- Linear Search ---");
        Product foundLinear = linearSearch(products, 102);
        System.out.println("Found product 102: " + foundLinear);

        System.out.println("\n--- Binary Search ---");
        sortProductsById(products);
        Product foundBinary = binarySearch(products, 104);
        System.out.println("Found product 104: " + foundBinary);

        Product notFound = binarySearch(products, 999);
        System.out.println("Search for product 999: " + notFound);
    }
}