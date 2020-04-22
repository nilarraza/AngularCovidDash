import { Hospitaldata } from './hospitaldata'

export class Covid {
    update_date_time:String
    local_new_cases:String
    local_total_cases:String
    local_total_number_of_individuals_in_hospitals:String
    local_deaths:String
    local_recovered:String
    global_new_cases:String
    global_total_cases:String
    global_deaths:String
    global_recovered:String
    hospital_data:Hospitaldata[]

}
