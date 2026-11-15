DIR=/storage/emulated/0/Android/data/com.tencent.mobileqq/Tencent/MobileQQ/chatpic/
find "$DIR" -type f -size +1048576c | while read -r f; do
    file -b "$f" | grep -qi "GIF image data" &&
    echo "delete: $f" && rm -f "$f"
done
