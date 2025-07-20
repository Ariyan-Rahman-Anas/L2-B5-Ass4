import { Checkbox } from "@/components/ui/checkbox"
import { Combobox } from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { dropdownItems } from "@/constants"

const BookCreateForm = () => {
    return (
        <form>
            <Input placeholder="Enter title" />
            <Input placeholder="Enter author's name" />
            <Combobox items={dropdownItems} />
            <Input placeholder="Enter ISBN number" />
            <Input type="number" placeholder="Enter copies" />
            <Textarea placeholder="Enter description" />

            <div className="flex items-center gap-2">
                <Checkbox id="terms-2" defaultChecked />
                <label htmlFor="terms-2" className="font-medium" >Available?</label>
            </div>
        </form>
    )
}
export default BookCreateForm