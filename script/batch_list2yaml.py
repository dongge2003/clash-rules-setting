#!/usr/bin/env python3
"""
批量转换脚本：递归遍历输入目录下所有 .list 文件，
调用 list2yaml.py 转换为 payload 格式的 .yaml 文件，
输出到新目录并保持原目录结构。

用法: python batch_list2yaml.py <输入目录> <输出目录>
"""
import os
import sys
import subprocess


def batch_convert(input_dir, output_dir, script_path):
    if not os.path.isdir(input_dir):
        print(f"错误：输入目录 '{input_dir}' 不存在", file=sys.stderr)
        sys.exit(1)

    success = 0
    failed = []

    for root, _, files in os.walk(input_dir):
        for filename in files:
            if not filename.endswith('.list'):
                continue

            input_file = os.path.join(root, filename)
            # 计算相对路径，保持目录结构
            rel_dir = os.path.relpath(root, input_dir)
            out_name = os.path.splitext(filename)[0] + '.yaml'
            output_file = os.path.join(output_dir, rel_dir, out_name)

            os.makedirs(os.path.dirname(output_file), exist_ok=True)

            try:
                result = subprocess.run(
                    [sys.executable, script_path, input_file, output_file],
                    capture_output=True, text=True, encoding='utf-8',
                    errors='replace'
                )
                if result.returncode == 0:
                    success += 1
                    msg = result.stdout.strip()
                    print(msg if msg else f"转换完成：{input_file}")
                else:
                    failed.append((input_file, result.stderr.strip()))
            except Exception as e:
                failed.append((input_file, str(e)))

    print(f"\n批量转换完成：成功 {success} 个，失败 {len(failed)} 个")
    for f, err in failed:
        print(f"  失败：{f}\n    原因：{err}", file=sys.stderr)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("用法: python batch_list2yaml.py <输入目录> <输出目录>", file=sys.stderr)
        sys.exit(1)

    input_dir = sys.argv[1]
    output_dir = sys.argv[2]
    script_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'list2yaml.py')
    batch_convert(input_dir, output_dir, script_path)
