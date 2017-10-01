def delete_nth(order,max_e):
    i = 0
    while i < len(order):
        while order.count(order[i]) > max_e:
            item = order[i]
            order.reverse()
            order.remove(item)
            order.reverse()
        i += 1
        
    return order