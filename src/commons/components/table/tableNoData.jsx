export function TableNoData({ colSpan }) {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center py-4 border text-gray-500">
        No Records
      </td>
    </tr>
  );
}
