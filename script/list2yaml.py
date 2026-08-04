#!/usr/bin/env python3
import sys
import os

def convert_lines(lines):
    """
    从行列表中提取规则，转换为 payload 格式的字符串列表。
    保留注释行（# 开头）和空行，作为区块说明与分隔。
    """
    result = ["payload:"]
    for line in lines:
        line = line.strip()
        # 空行保留，作为区块分隔（yaml 中空行合法）
        if not line:
            result.append("")
            continue
        # 注释行保留，缩进到 payload 列表内部
        if line.startswith('#'):
            result.append(f"  {line}")
            continue
        if ',' in line:
            rule_type, value = line.split(',', 1)
            rule_type = rule_type.strip()
            value = value.strip()
            result.append(f"  - {rule_type},{value}")
        # 不符合格式的行忽略（可根据需要调整）
    return result

def convert_file(input_file, output_file=None):
    """
    读取输入文件，转换内容，并输出到标准输出或指定文件。
    """
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"错误：输入文件 '{input_file}' 不存在", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"读取文件失败：{e}", file=sys.stderr)
        sys.exit(1)

    output_lines = convert_lines(lines)

    if output_file:
        try:
            # 确保输出目录存在（如果路径包含目录）
            out_dir = os.path.dirname(output_file)
            if out_dir and not os.path.exists(out_dir):
                os.makedirs(out_dir)
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write('\n'.join(output_lines))
            print(f"转换完成，结果已写入：{output_file}")
        except Exception as e:
            print(f"写入输出文件失败：{e}", file=sys.stderr)
            sys.exit(1)
    else:
        # 输出到标准输出
        sys.stdout.write('\n'.join(output_lines))

if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        print("用法: python script.py <输入文件> [输出文件]", file=sys.stderr)
        print("  若未指定输出文件，结果将打印到标准输出", file=sys.stderr)
        sys.exit(1)

    input_file = args[0]
    output_file = args[1] if len(args) > 1 else None
    convert_file(input_file, output_file)